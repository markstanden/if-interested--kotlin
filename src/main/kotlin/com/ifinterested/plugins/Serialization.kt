package com.ifinterested.plugins

import com.ifinterested.initialise
import io.ktor.serialization.kotlinx.json.*
import io.ktor.server.application.*
import io.ktor.server.plugins.*
import io.ktor.server.response.*
import io.ktor.server.routing.*

fun Application.configureSerialization() {
    install(ContentNegotiation) {
        json()
    }

    routing {
        get("/json") {

            call.respond(initialise())
        }
    }
}