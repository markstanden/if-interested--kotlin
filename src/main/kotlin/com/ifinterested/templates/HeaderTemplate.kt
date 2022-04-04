package com.ifinterested.templates

import io.ktor.server.html.*
import kotlinx.html.BODY
import kotlinx.html.FlowContent
import kotlinx.html.h1
import kotlinx.html.header

class HeaderTemplate : Template<BODY> {
    val title = Placeholder<FlowContent>()
    override fun BODY.apply() {
        header(classes = "page-header") {
            h1(classes = "page-title") {
                insert(title)
            }
        }
    }
}