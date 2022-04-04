package com.ifinterested

import com.ifinterested.plugins.configureRouting
import io.ktor.client.request.*
import io.ktor.client.statement.*
import io.ktor.http.*
import io.ktor.server.testing.*
import kotlinx.coroutines.launch
import kotlinx.coroutines.runBlocking
import org.junit.Test
import kotlin.test.assertContains


class ApplicationTest {
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
    fun `Check root status returns OK`() {
        testClient("/") { assert(it.status == HttpStatusCode.OK) }
    }

    @Test
    fun `Check root route renders site name`() {
        testClient("/") { assertContains(it.bodyAsText(), "if(interested)") }
    }

    @Test
    fun `Check post route status returns OK`() {
        testClient("/posts") { assert(it.status == HttpStatusCode.OK) }
    }

    @Test
    fun `Check post route renders site name`() {
        testClient("/posts") { assertContains(it.bodyAsText(), "if(interested)") }
    }
}