package com.ifinterested.routing

import com.ifinterested.initialise
import com.ifinterested.models.BlogPost
import com.ifinterested.templates.PageTopLevelTemplate
import io.ktor.server.application.*
import io.ktor.server.html.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import kotlinx.html.span

fun Application.posts(posts: List<BlogPost>) {
    routing {
        get("/") {
            call.respondRedirect("posts")
        }
        get("posts") {
            call.respondHtmlTemplate(PageTopLevelTemplate(posts)) {
                headerContent {
                    title {
                        span(classes="code--operator") { +"if" }
                        span(classes="code--perens") { +"(" }
                        span(classes="code--variable") { +"interested" }
                        span(classes="code--perens") { +")" }
                    }
                }
                footerContent {
                    title { +"if(interested)" }
                }
            }
        }
    }
}