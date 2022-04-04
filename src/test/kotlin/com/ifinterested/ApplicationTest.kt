package com.ifinterested

import com.ifinterested.plugins.configureRouting
import io.ktor.client.request.*
import io.ktor.client.statement.*
import io.ktor.http.*
import io.ktor.server.testing.*
import kotlinx.coroutines.launch
import kotlinx.coroutines.runBlocking
import org.junit.jupiter.api.Test
import kotlin.test.assertContains

class RouteTesting {
    @Test
    private fun testClient(route: String = "/", test: suspend (HttpResponse) -> Unit) {
        testApplication {
            application {
                configureRouting()
            }
            val response = client.get(route)
            runBlocking { launch { test(response) } }
        }
    }

    @Test
    fun String.checkStatus() {
        testClient(this) { assert(it.status == HttpStatusCode.OK) }
    }

    @Test
    fun String.checkTextRendered(name: String) {
        testClient(this) { assertContains(it.bodyAsText(), name) }
    }

    @Test
    fun `Check route status returns OK`() {
        "/".checkStatus()
    }

    @Test
    fun `Check route renders site name`() {
        "/".checkTextRendered("if(interested)")
    }

    @Test
    fun `Check posts route status returns OK`() {
        "/posts".checkStatus()
    }

    @Test
    fun `Check posts route renders site name`() {
        "/posts".checkTextRendered("if(interested)")
    }
}