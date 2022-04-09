package com.ifinterested.routing

import com.ifinterested.models.BlogPost
import com.ifinterested.models.BlogPost.Companion.asID
import com.ifinterested.models.BlogPost.Companion.asURL
import com.ifinterested.templates.PageTopLevelTemplate
import io.ktor.server.application.*
import io.ktor.server.html.*
import io.ktor.server.routing.*
import io.ktor.server.util.*
import kotlinx.html.span

fun Application.singlePost(posts: List<BlogPost>) {
    routing {
        get("posts/{dateID}/{title}/") {
            val dateID = call.parameters.getOrFail<String>("dateID")
            val title = call.parameters.getOrFail<String>("title")
            val filteredPosts = posts.filter { dateID == it.date.asID() }.first { title == it.title.asURL() }
            call.respondHtmlTemplate(PageTopLevelTemplate(listOf(filteredPosts))) {
                headerContent {
                    title {
                        span(classes="code--operator") { +"if" }
                        span(classes="code--perens") { +"(" }
                        span(classes="code--variable") { +"interested" }
                        span(classes="code--operator") { +"==" }
                        span(classes="code--string") { +"\"" }
                        span(classes="code--string") { +filteredPosts.title }
                        span(classes="code--string") { +"\"" }
                        span(classes="code--perens") { +")" }
                    }
                }
                footerContent {
                    title { +filteredPosts.title }
                }
            }
        }
    }
}