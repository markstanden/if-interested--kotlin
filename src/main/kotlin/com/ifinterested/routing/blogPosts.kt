package com.ifinterested.routing

import com.ifinterested.initialise
import com.ifinterested.templates.PageLayout
import io.ktor.server.application.*
import io.ktor.server.html.*
import io.ktor.server.response.*
import io.ktor.server.routing.*

fun Application.posts() {
    routing {
        get("/") {
            call.respondRedirect("posts")
        }
        route("posts") {
            get {
                val posts = initialise()
                call.respondHtmlTemplate(PageLayout()) {
                    headerSection {
                        pageTitle { +"if(interested)..." }
                    }
                    blogSection {
                        posts
                    }
                }
            }
        }
    }
}