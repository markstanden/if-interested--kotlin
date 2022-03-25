package com.ifinterested.templates

import com.ifinterested.initialise
import io.ktor.server.html.*
import kotlinx.html.HTML
import kotlinx.html.body
import kotlinx.html.head
import kotlinx.html.link
import kotlinx.html.meta
import kotlinx.html.title

class PageLayout : Template<HTML> {
    val headerSection = TemplatePlaceholder<HeaderTemplate>()
    val blogSection = TemplatePlaceholder<BlogTemplate>()
    val posts = initialise()

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
            insert(HeaderTemplate(), headerSection)
            insert(BlogTemplate(posts), blogSection)
        }
    }
}