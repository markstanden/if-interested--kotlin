package com.ifinterested

import com.ifinterested.plugins.configureRouting
import io.kotest.core.spec.style.FunSpec
import io.kotest.matchers.shouldBe
import io.kotest.matchers.string.shouldContain
import io.ktor.client.request.*
import io.ktor.client.statement.*
import io.ktor.client.utils.EmptyContent.status
import io.ktor.http.*
import io.ktor.server.testing.*

class ApplicationTest : FunSpec({
                                    testApplication {
                                        application {
                                            configureRouting()
                                        }
                                        client.get("/").apply {

                                        }
                                    }
                                    test("Basic Render Test") {
                                        test("check status") { status.shouldBe(HttpStatusCode.OK) }
                                        test("check for site title") {
                                            body.shouldContain("if(interested)")
                                        }
                                        test("check for basic page tags") { bodyAsText().basePageTests() }
                                    }
                                }
})