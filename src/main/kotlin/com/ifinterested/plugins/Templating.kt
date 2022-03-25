package com.ifinterested.plugins

import com.ifinterested.initialise
import com.ifinterested.templates.PageLayout
import io.ktor.server.application.*
import io.ktor.server.html.*
import io.ktor.server.routing.*

fun Application.configureTemplating() {
    routing {
        get("/apost") {
            call.respondHtmlTemplate(PageLayout(initialise())){}
        }
    }
}