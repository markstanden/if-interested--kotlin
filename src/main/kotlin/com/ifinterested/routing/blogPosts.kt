package com.ifinterested.routing

import com.ifinterested.initialise
import com.ifinterested.templates.PageLayout
import io.ktor.server.application.*
import io.ktor.server.html.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import kotlinx.html.article

fun Application.posts() {
    routing {
        get("/") {
            call.respondRedirect("posts")
        }
        get("posts") {
            call.respondHtmlTemplate(PageLayout()) {
                pageContent {
                    postTitle { +initialise().first().title }
                    postBody { article { +"test" } }
                }
            }
        }
    }
}