<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match='/weblibros'>
        <html>
            <head>
                <title>WebLibros</title>
            </head>
            <body>
                <xsl:for-each select='libros'>
                    <xsl:apply-templates />
                </xsl:for-each>
            </body>
        </html>
    </xsl:template>
    <xsl:template match='libro'>
        <b>Título: <xsl:value-of select='titulo' /></b>
        <br/>
    </xsl:template>
</xsl:stylesheet>