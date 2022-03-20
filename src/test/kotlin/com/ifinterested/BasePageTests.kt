package com.ifinterested

import kotlin.test.Test
import kotlin.test.assertContains

@Test
fun String.basePageTests() {
    assertContains(this, """<html lang="en">""", false, "Returned page should contain an opening html tag")
    assertContains(this, "</html>", false, "Returned page should contain a closing html tag")
    assertContains(this, "<head", false, "Returned page should contain an opening head tag")
    assertContains(this, "</head>", false, "Returned page should contain a closing head tag")
    assertContains(this, "<header", false, "Returned page should contain an opening header tag")
    assertContains(this, "</header>", false, "Returned page should contain a closing header tag")
    assertContains(this, "<main", false, "Returned page should contain an opening main tag")
    assertContains(this, "</main>", false, "Returned page should contain a closing main tag")
    assertContains(this, "<footer", false, "Returned page should contain an opening footer tag")
    assertContains(this, "</footer>", false, "Returned page should contain a closing footer tag")
}