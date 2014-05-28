<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match='/weblibros'>
        <html>
            <head>
                <title>WebLibros</title>
                <link rel="stylesheet" type="text/css" href="css/weblibros.css" />
            </head>
            <body>
                <xsl:for-each select='libros'>
                    <xsl:apply-templates />
                </xsl:for-each>
            </body>
        </html>
    </xsl:template>
    <xsl:template match='libro'>
        <div cass="libro-box">
            <div class="libro-head">
                <b>Título: <xsl:value-of select='datosPrincipales/titulo' /></b>
                <b>Autor: <xsl:value-of select='datosPrincipales/autor/nombre' /> <xsl:value-of select='datosPrincipales/autor/apellidos' /></b>
                <b>Género: <xsl:value-of select='datosPrincipales/genero' /></b>
            </div>
            <div class="libro-img">
                <img src="img/{datosPrincipales/imagen}" alt="Imagen de {datosPrincipales/titulo}" title="Imagen de {datosPrincipales/titulo}" />
            </div>
        </div>
        <br/>
    </xsl:template>
</xsl:stylesheet>