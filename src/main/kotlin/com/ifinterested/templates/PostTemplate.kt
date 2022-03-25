package com.ifinterested.templates

import io.ktor.server.html.*
import kotlinx.html.FlowContent
import kotlinx.html.H2
import kotlinx.html.SECTION
import kotlinx.html.article
import kotlinx.html.h2
import kotlinx.html.section

class PostTemplate : Template<FlowContent> {
    val postTitle = Placeholder<H2>()
    val postBody = Placeholder<SECTION>()

    override fun FlowContent.apply() {
        article {
            section("title-section") {
                h2(classes = "post-title") {
                    insert(postTitle)
                }
                section(classes = "post-body") {
                    insert(postBody)
                }
            }
        }
    }
}