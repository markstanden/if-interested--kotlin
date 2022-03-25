package com.ifinterested.plugins

import com.ifinterested.routing.posts
import io.ktor.server.application.*
import io.ktor.server.http.content.*
import io.ktor.server.routing.*
import java.io.File

fun Application.configureRouting() {
    routing {
        staticRootFolder = File("static")
        static("authors") {
            files("authors")
        }

        posts()
    }
}