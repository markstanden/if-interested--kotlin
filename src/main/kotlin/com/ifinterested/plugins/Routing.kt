package com.ifinterested.plugins

import com.ifinterested.initialise
import com.ifinterested.routing.posts
import com.ifinterested.routing.singlePost
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
        static("styles") {
            files("styles")
        }

        val testList = initialise()
        posts(posts = testList)
        singlePost(posts = testList)

    }
}