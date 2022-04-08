package com.ifinterested.templates

import io.ktor.server.html.*
import kotlinx.html.BODY
import kotlinx.html.FlowContent
import kotlinx.html.classes
import kotlinx.html.div
import kotlinx.html.dom.document
import kotlinx.html.h1
import kotlinx.html.header
import kotlinx.html.li
import kotlinx.html.nav
import kotlinx.html.script
import kotlinx.html.ul

class HeaderTemplate : Template<BODY> {
    val title = Placeholder<FlowContent>()
    override fun BODY.apply() {
        header {
            classes = setOf("menu", "page-header", "top", "left")
            h1 {
                classes = setOf("menu-element")
                insert(title)
                +"{"
            }
            nav {
                classes = setOf("menu-element", "start-hidden")
                ul {
                    li {
                        +"Latest Posts"
                    }
                    li {
                        +"Github"
                    }
                    li {
                        +"About"
                    }
                }
            }
        }
    }
}