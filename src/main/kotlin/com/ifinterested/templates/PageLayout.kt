package com.ifinterested.templates

import com.ifinterested.models.BlogPost
import io.ktor.server.html.*
import kotlinx.html.HTML
import kotlinx.html.body
import kotlinx.html.head
import kotlinx.html.link
import kotlinx.html.meta
import kotlinx.html.title

class PageLayout(val posts: List<BlogPost>) : Template<HTML> {

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
            insert(BlogTemplate(posts), TemplatePlaceholder())
        }
    }
}