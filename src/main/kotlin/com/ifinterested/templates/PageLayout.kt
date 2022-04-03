package com.ifinterested.templates

import io.ktor.server.html.*
import kotlinx.html.HTML
import kotlinx.html.article
import kotlinx.html.body
import kotlinx.html.head
import kotlinx.html.header
import kotlinx.html.link
import kotlinx.html.meta
import kotlinx.html.title

class PageLayout : Template<HTML> {
    val pageContent = TemplatePlaceholder<PostTemplate>()
    override fun HTML.apply() {
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
            insert(HeaderTemplate(), TemplatePlaceholder())
            article {
                insert(PostTemplate(), pageContent)
            }
        }
    }
}