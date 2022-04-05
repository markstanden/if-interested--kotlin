package com.ifinterested

import com.ifinterested.models.BlogPost
import com.ifinterested.models.Date
import com.ifinterested.models.PostElement
import com.ifinterested.models.ValidPostElement
import com.ifinterested.routing.posts
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

    private fun testClient(route: String, test: suspend (HttpResponse) -> Unit) {
        testApplication {
            application { posts(listOf(testPost)) }
            runBlocking { launch { test(client.get(route)) } }
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
        "/posts/${testPost.postID}".checkStatus()
    }

    @Test
    fun `check single post displays title`() {
        "/posts/${testPost.postID}".checkTextRendered("Single Post")
    }

    @Test
    fun `check single post displays first para`() {
        "/posts/${testPost.postID}".checkTextRendered("First Paragraph")
    }

    @Test
    fun `check single post displays code block`() {
        "/posts/${testPost.postID}".checkTextRendered("val code = code()")
    }

    @Test
    fun `check single post displays second para`() {
        "/posts/${testPost.postID}".checkTextRendered("Second Paragraph")
    }
}