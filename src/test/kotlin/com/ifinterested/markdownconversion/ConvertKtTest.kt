package com.ifinterested.markdownconversion

import io.kotest.core.spec.style.FunSpec
import io.kotest.matchers.shouldBe

class ConvertKtTest : FunSpec({
                                  test("Test Basic Markdown Parsing") {
                                      """
                                      # Test Heading
                                      
                                      Test Text
                                      
                                      - List One
                                      - List Two
                                      - List Three
                                      """.trimIndent()
                                          .toHTML() shouldBe "<body><h1>Test Heading</h1><p>Test Text</p><ul><li>List One</li><li>List Two</li><li>List Three</li></ul></body>"
                                  }
                              })