package com.ifinterested.models

import kotlinx.html.SECTION
import kotlinx.html.p
import kotlinx.html.pre

typealias PostElement = SECTION.() -> Unit

fun paragraph(text: String): PostElement =
    { p { +text } }

fun code(code: String): PostElement =
    { pre { +code } }