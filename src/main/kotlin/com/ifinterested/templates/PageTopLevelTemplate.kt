package com.ifinterested.templates

import com.ifinterested.models.BlogPost
import io.ktor.server.html.*
import kotlinx.html.HTML
import kotlinx.html.MAIN
import kotlinx.html.body
import kotlinx.html.classes
import kotlinx.html.dom.document
import kotlinx.html.head
import kotlinx.html.hr
import kotlinx.html.lang
import kotlinx.html.link
import kotlinx.html.main
import kotlinx.html.meta
import kotlinx.html.script
import kotlinx.html.title

class PageTopLevelTemplate(val posts: List<BlogPost>) : Template<HTML> {
    val headerContent = TemplatePlaceholder<HeaderTemplate>()
    val pageContent = TemplatePlaceholder<Template<MAIN>>()
    val footerContent = TemplatePlaceholder<FooterTemplate>()

    override fun HTML.apply() {
        lang = "en"
        head {
            meta {
                charset = "UTF-8"
                content = "width=device-width, initial-scale=1.0"
                name = "viewport"
            }
            meta {
                name = "description"
                content =
                    "Personal blog, written in Kotlin. About coding - mostly about kotlin - for people who love Kotlin as much as me!"
            }

            link {
                rel = "icon"
                type = "image/svg+xml"
                href = "/icons/if(interested).svg"
            }

            link {
                rel = "icon"
                type = "image/png"
                href = "/icons/if(interested).png"
            }

            link {
                href = "/styles/main.css"
                rel = "stylesheet"
            }

            script {
                src = "/scripts/scripts.js"
                defer = true
            }
            title("if(interested) : Kotlin focused development blog.")
        }

        body {
            insert(HeaderTemplate(), headerContent)
            main {
                classes = setOf("main-wrapper")
                insert(if (posts.size == 1) SinglePostTemplate(posts) else MultiPostTemplate(posts), pageContent)
            }
            insert(FooterTemplate(), footerContent)

        }
    }
}