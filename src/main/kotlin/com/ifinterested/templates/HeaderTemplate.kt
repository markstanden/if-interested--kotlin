package com.ifinterested.templates

import kotlinx.html.h1
import kotlinx.html.header
import kotlinx.html.stream.createHTML

fun addHeader() =
    createHTML().header(classes = "page-header") {
        addLogo()
    }


fun addLogo(pageTitle: String = "if(interested)") =
    createHTML().h1(classes = "page-title") {
        +pageTitle
    }