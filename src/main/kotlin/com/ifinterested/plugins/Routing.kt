package com.ifinterested.plugins

import io.ktor.server.application.*
import io.ktor.server.locations.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import io.ktor.server.routing.get

fun Application.configureRouting() {
    routing {
        get("/") {
            call.respondText("if(interested)")
        }
    }
}