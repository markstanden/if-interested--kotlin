package com.ifinterested.templates

import io.ktor.server.html.*
import kotlinx.html.FlowContent
import kotlinx.html.h1
import kotlinx.html.header

class HeaderTemplate(val pageTitle: String = "if(interested)") : Template<FlowContent> {
    override fun FlowContent.apply() {
        header {
            h1(classes = "page-title") {
                +pageTitle
            }
        }
    }
}