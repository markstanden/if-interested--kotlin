package com.ifinterested

import com.ifinterested.plugins.configureRouting
import io.kotest.core.spec.style.AnnotationSpec
import io.ktor.client.request.*
import io.ktor.client.statement.*
import io.ktor.http.*
import io.ktor.server.testing.*
import kotlin.test.assertContains
import kotlin.test.assertEquals

class ApplicationTest : AnnotationSpec() {
    @Test
    fun testRoot() =
        testApplication {
            application {
                configureRouting()
            }
            client.get("/").apply {
                assertEquals(HttpStatusCode.OK, status)
                assertContains("if(interested)", bodyAsText())
                bodyAsText().basePageTests()
            }
        }
}