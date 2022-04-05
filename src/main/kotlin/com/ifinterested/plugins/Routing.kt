package com.ifinterested.plugins

import com.ifinterested.initialise
import com.ifinterested.routing.posts
import com.ifinterested.routing.singlePost
import com.ifinterested.routing.staticFiles
import io.ktor.server.application.*
import io.ktor.server.routing.*

fun Application.configureRouting() {
    val testList = initialise()

    routing {
        staticFiles()
        posts(posts = testList)
        singlePost(posts = testList)
    }
}