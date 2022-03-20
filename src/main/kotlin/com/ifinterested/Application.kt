package com.ifinterested

import io.ktor.server.engine.*
import io.ktor.server.netty.*
import com.ifinterested.plugins.*

fun main() {
    embeddedServer(Netty, port = 8080, host = "0.0.0.0") {
        configureRouting()
        configureSecurity()
        configureTemplating()
        configureSerialization()
    }.start(wait = true)
}
