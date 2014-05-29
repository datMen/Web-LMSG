<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match='/weblibros'>
        <html>
            <head>
                <title>WebLibros</title>
                <link rel="stylesheet" type="text/css" href="css/weblibros.css" />
                <script type="text/javascript" src="js/jquery-1.9.1.min.js"></script>
                <script type="text/javascript" src="js/weblibros.js"></script>
            </head>
            <body>
                <xsl:for-each select='libros'>
                    <xsl:apply-templates />
                </xsl:for-each>
            </body>
        </html>
    </xsl:template>
    <xsl:template match='libro'>
        <div class="libro-box" id="{datosPrincipales/id}">
            <div class="libro-img" id="{datosPrincipales/id}">
                <a href="#"><img id="{datosPrincipales/id}" src="img/{datosPrincipales/imagen}" alt="Imagen de {datosPrincipales/titulo}" title="Imagen de {datosPrincipales/titulo}" /></a>
            </div>
            <div class="libro-head" id="{datosPrincipales/id}">
                <p><b>Título: </b> <xsl:value-of select='datosPrincipales/titulo' /></p>
                <p><b>Autor: </b> <xsl:value-of select='datosPrincipales/autor/nombre' />&#160;<xsl:value-of select='datosPrincipales/autor/apellidos' /></p>
                <p><b>Género: </b> <xsl:value-of select='datosPrincipales/genero' /></p>
                <p class="numCapitulos"><b>Capitulos: </b> <xsl:value-of select='metadatos/numCapitulos' /> - <b>Páginas: </b> <xsl:value-of select='metadatos/numPaginas' /></p>
                <a href="#">
                    <div class="likes" style="background-image: url('img/heart.png');">
                        <b><xsl:value-of select='social/likes' /></b>
                    </div>
                </a>
            </div>
        </div>
    </xsl:template>
</xsl:stylesheet>