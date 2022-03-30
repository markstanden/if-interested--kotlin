package com.ifinterested.routing

import com.ifinterested.initialise
import com.ifinterested.templates.blogPosts
import com.ifinterested.templates.pageLayout
import io.ktor.server.application.*
import io.ktor.server.html.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import kotlinx.html.unsafe

fun Application.posts() {
    routing {
        get("/") {
            call.respondRedirect("posts")
        }
        get("posts") {
            call.respondHtml {
                unsafe {
                    +pageLayout {
                        blogPosts(initialise())
                    }
                }
            }
        }
    }
}