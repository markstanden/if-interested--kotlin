package com.ifinterested

import com.ifinterested.models.BlogPost
import com.ifinterested.models.BlogPost.Companion.asID
import com.ifinterested.models.BlogPost.Companion.asURL
import com.ifinterested.models.Date
import com.ifinterested.models.PostElement
import com.ifinterested.models.ValidPostElement
import com.ifinterested.routing.singlePost
import com.ifinterested.routing.staticFiles
import io.ktor.client.request.*
import io.ktor.client.statement.*
import io.ktor.http.*
import io.ktor.server.testing.*
import kotlinx.coroutines.launch
import kotlinx.coroutines.runBlocking
import org.junit.jupiter.api.Test

class SinglePostTests {
    val testPost =
        BlogPost.create(title = "Single Post", body = listOf(PostElement(ValidPostElement.PARAGRAPH, "First Paragraph"),
                                                             PostElement(ValidPostElement.CODE, "val code = code()"),
                                                             PostElement(ValidPostElement.PARAGRAPH,
                                                                         "Second Paragraph")), authorID = 1,
                        date = Date(2022, 1, 1))
    val postURL = "/posts/${testPost.date.asID()}/${testPost.title.asURL()}/"


    private fun testClient(route: String, test: suspend (HttpResponse) -> Unit) {
        testApplication {
            application {
                staticFiles()
                singlePost(listOf(testPost))
            }
            val res = client.get(route)
            runBlocking { launch { test(res) } }
        }
    }

    private fun String.checkStatus() {
        testClient(this) { assert(it.status == HttpStatusCode.OK) }
    }

    private fun String.checkTextRendered(text: String) {
        testClient(this) { assert(it.bodyAsText().contains(text)) }
    }

    @Test
    fun `check single post status ok`() {
        postURL.checkStatus()
    }

    @Test
    fun `check single post displays title`() {
        postURL.checkTextRendered("Single Post")
    }

    @Test
    fun `check single post displays first paragraph text`() {
        postURL.checkTextRendered("First Paragraph")
    }

    @Test
    fun `check single post displays code block`() {
        postURL.checkTextRendered("val code = code()")
    }

    @Test
    fun `check single post displays second paragraph text`() {
        postURL.checkTextRendered("Second Paragraph")
    }
}