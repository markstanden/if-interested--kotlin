package com.ifinterested.templates

import kotlinx.html.BODY
import kotlinx.html.body
import kotlinx.html.head
import kotlinx.html.html
import kotlinx.html.link
import kotlinx.html.meta
import kotlinx.html.stream.createHTML
import kotlinx.html.title

fun pageLayout(pageContent: BODY.() -> Unit) =
    createHTML(true).html {
        head {
            meta {
                charset = "UTF-8"
                content = "width=device-width, initial-scale=1.0"
                name = "viewport"
            }
            link {
                href = "/styles"
                rel = "stylesheet"
            }
            title("if(interested)")
        }
        body {
            addHeader()
            pageContent()
        }
    }