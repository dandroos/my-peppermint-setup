var path = require( "path" );
var fs = require( 'fs' );
var octicons = require( 'octicons' );

var utils = require( './utils.js' );
var highlights = require( './highlights.js' );

function getIcon( context, tag )
{
    var colour = highlights.getIconColour( tag );

    var darkIconPath = context.asAbsolutePath( path.join( "resources/icons", "dark", "todo-green.svg" ) );
    var lightIconPath = context.asAbsolutePath( path.join( "resources/icons", "light", "todo-green.svg" ) );

    var colourName = utils.isHexColour( colour.substr( 1 ) ) ? colour.substr( 1 ) : colour;

    var iconName = highlights.getIcon( tag );

    if( iconName )
    {
        if( !octicons[ iconName ] )
        {
            iconName = "check";
        }

        if( !fs.existsSync( context.globalStoragePath ) )
        {
            fs.mkdirSync( context.globalStoragePath );
        }

        if( context.globalStoragePath )
        {
            var octiconIconPath = path.join( context.globalStoragePath, "todo-" + iconName + "-" + colourName + ".svg" );
            if( !fs.existsSync( octiconIconPath ) )
            {
                var octiconIconDefinition = "<?xml version=\"1.0\" encoding=\"iso-8859-1\"?>\n" +
                    octicons[ iconName ].toSVG( { "xmlns": "http://www.w3.org/2000/svg", "fill": colour } );

                fs.writeFileSync( octiconIconPath, octiconIconDefinition );
            }

            darkIconPath = octiconIconPath;
            lightIconPath = octiconIconPath;
        }
    }
    else if( utils.isHexColour( colour.substr( 1 ) ) )
    {
        var colouredIconPath = path.join( context.globalStoragePath, "todo-" + colourName + ".svg" );
        if( !fs.existsSync( colouredIconPath ) )
        {
            if( !fs.existsSync( context.globalStoragePath ) )
            {
                fs.mkdirSync( context.globalStoragePath );
            }

            var colouredIconDefinition =
                "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">" +
                "<path d=\"M11.1924 5.06738L11.8076 5.68262L6.6875 10.8027L4.19238 8.30762L4.80762 7.69238L6.6875 9.57227L11.1924 5.06738ZM8 1C8.64258 1 9.26237 1.08431 9.85938 1.25293C10.4564 1.41699 11.0146 1.65169 11.5342 1.95703C12.0537 2.25781 12.5254 2.6224 12.9492 3.05078C13.3776 3.47461 13.7422 3.94629 14.043 4.46582C14.3483 4.98535 14.583 5.54362 14.7471 6.14062C14.9157 6.73763 15 7.35742 15 8C15 8.64258 14.9157 9.26237 14.7471 9.85938C14.583 10.4564 14.3483 11.0146 14.043 11.5342C13.7422 12.0537 13.3776 12.5277 12.9492 12.9561C12.5254 13.3799 12.0537 13.7445 11.5342 14.0498C11.0146 14.3506 10.4564 14.5853 9.85938 14.7539C9.26237 14.918 8.64258 15 8 15C7.35742 15 6.73763 14.918 6.14062 14.7539C5.54362 14.5853 4.98535 14.3506 4.46582 14.0498C3.94629 13.7445 3.47233 13.3799 3.04395 12.9561C2.62012 12.5277 2.25553 12.0537 1.9502 11.5342C1.64941 11.0146 1.41471 10.4587 1.24609 9.86621C1.08203 9.26921 1 8.64714 1 8C1 7.35742 1.08203 6.73763 1.24609 6.14062C1.41471 5.54362 1.64941 4.98535 1.9502 4.46582C2.25553 3.94629 2.62012 3.47461 3.04395 3.05078C3.47233 2.6224 3.94629 2.25781 4.46582 1.95703C4.98535 1.65169 5.54134 1.41699 6.13379 1.25293C6.73079 1.08431 7.35286 1 8 1ZM8 14.125C8.56055 14.125 9.10059 14.0521 9.62012 13.9062C10.1442 13.7604 10.6318 13.5553 11.083 13.291C11.5387 13.0221 11.9535 12.7008 12.3271 12.3271C12.7008 11.9535 13.0199 11.541 13.2842 11.0898C13.5531 10.6341 13.7604 10.1465 13.9062 9.62695C14.0521 9.10742 14.125 8.5651 14.125 8C14.125 7.43945 14.0521 6.89941 13.9062 6.37988C13.7604 5.85579 13.5531 5.36816 13.2842 4.91699C13.0199 4.46126 12.7008 4.04655 12.3271 3.67285C11.9535 3.29915 11.5387 2.98014 11.083 2.71582C10.6318 2.44694 10.1442 2.23958 9.62012 2.09375C9.10059 1.94792 8.56055 1.875 8 1.875C7.43945 1.875 6.89714 1.94792 6.37305 2.09375C5.85352 2.23958 5.36589 2.44694 4.91016 2.71582C4.45898 2.98014 4.04655 3.29915 3.67285 3.67285C3.29915 4.04655 2.97786 4.46126 2.70898 4.91699C2.44466 5.36816 2.23958 5.85579 2.09375 6.37988C1.94792 6.89941 1.875 7.43945 1.875 8C1.875 8.56055 1.94792 9.10286 2.09375 9.62695C2.23958 10.1465 2.44466 10.6341 2.70898 11.0898C2.97786 11.541 3.29915 11.9535 3.67285 12.3271C4.04655 12.7008 4.45898 13.0221 4.91016 13.291C5.36589 13.5553 5.85352 13.7604 6.37305 13.9062C6.89258 14.0521 7.4349 14.125 8 14.125Z\"" +
                " fill=\"" + colour + "\" /></svg>";

            fs.writeFileSync( colouredIconPath, colouredIconDefinition );
        }

        darkIconPath = colouredIconPath;
        lightIconPath = colouredIconPath;
    }
    else if( highlights.getColourList().indexOf( colourName ) > -1 )
    {
        darkIconPath = context.asAbsolutePath( path.join( "resources/icons", "dark", "todo-" + colour + ".svg" ) );
        lightIconPath = context.asAbsolutePath( path.join( "resources/icons", "light", "todo-" + colour + ".svg" ) );
    }

    var icon = {
        dark: darkIconPath,
        light: lightIconPath
    };

    return icon;
}

module.exports.getIcon = getIcon;
