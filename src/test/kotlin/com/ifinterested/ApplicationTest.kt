package com.ifinterested

import com.ifinterested.plugins.configureRouting
import io.ktor.client.request.*
import io.ktor.client.statement.*
import io.ktor.http.*
import io.ktor.server.testing.*
import kotlinx.coroutines.launch
import kotlinx.coroutines.runBlocking
import org.junit.Ignore
import org.junit.jupiter.api.Nested
import org.junit.jupiter.api.Test

class RouteTesting {
    private fun testClient(route: String = "/", test: suspend (HttpResponse) -> Unit) {
        testApplication {
            application {
                configureRouting()
            }
            val response = client.get(route)
            runBlocking { launch { test(response) } }
        }
    }

    private fun String.checkStatus() {
        testClient(this) { assert(it.status == HttpStatusCode.OK) }
    }

    private fun String.checkTextRendered(name: String) {
        testClient(this) { assert(it.bodyAsText().contains(name)) }
    }


    abstract inner class AllRoutes(val route : String = "/") {
        @Test
        fun `Check route status returns OK`() {
            route.checkStatus()
        }

        @Test
        fun `Check route renders site name`() {
            route.checkTextRendered("if(interested)")
        }

        @Ignore("Still working on templating")
        //@Test
        fun `check route has basic elements expected from a page`() {
           testClient(route) { it.bodyAsText().basePageTests() }
        }
    }

    @Nested
    inner class `root route` : AllRoutes("/")

    @Nested
    inner class `posts route` : AllRoutes("/posts")
}