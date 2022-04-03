package com.ifinterested.templates

import io.ktor.server.html.*
import kotlinx.html.BODY
import kotlinx.html.h1
import kotlinx.html.header

class HeaderTemplate : Template<BODY> {
    val pageTitle: String = "if(interested)"
    override fun BODY.apply() {
        header(classes = "page-header") {
            h1(classes = "page-title") {
                +pageTitle
            }
        }
    }
}