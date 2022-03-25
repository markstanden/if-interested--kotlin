package com.ifinterested.templates
import io.ktor.server.html.*
import kotlinx.html.FlowContent
import kotlinx.html.H1
import kotlinx.html.h1
import kotlinx.html.header

class HeaderTemplate : Template<FlowContent> {
    val pageTitle = Placeholder<H1>()
    override fun FlowContent.apply() {
        header {
            h1(classes = "page-title") {
                insert(pageTitle)
            }
        }
    }
}