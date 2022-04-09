package com.ifinterested.routing

import io.ktor.server.application.*
import io.ktor.server.http.content.*
import io.ktor.server.routing.*
import java.io.File

fun Application.staticFiles() {
    routing {
        staticRootFolder = File("static")
        listOf("authors", "icons", "scripts", "styles").forEach {
            static(it) {
                files(it)
            }
        }
    }
}