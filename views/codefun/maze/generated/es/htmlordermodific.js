    for (var a = Rc, b = F, c = Sc, d =
        '<div style="display: none">
            <span id="Games_name">Juegos de Blockly</span>
            <span id="Games_puzzle">Rompecabezas</span>
            <span id="Games_maze">Laberinto</span>
            <span id="Games_bird">P\u00e1jaro</span>
            <span id="Games_turtle">Tortuga</span>
            <span id="Games_movie">Pel\u00edcula</span>
            <span id="Games_pondTutor">Tutor del estanque</span>
            <span id="Games_pond">Estanque</span>
            <span id="Games_linesOfCode1">Resolviste este nivel con 1 l\u00ednea de JavaScript:</span>
            <span id="Games_linesOfCode2">Resolviste este nivel con %1 l\u00edneas de JavaScript:</span>
            <span id="Games_nextLevel">\u00bfEst\u00e1s listo/a para el escenario %1?</span>
            <span id="Games_finalLevel">\u00bfEst\u00e1s listo/a para el siguiente desaf\u00edo?</span>
            <span id="Games_linkTooltip">Guardar y enlazar a los bloques.</span>
            <span id="Games_runTooltip">Ejecutar el programa que escribiste.</span>
            <span id="Games_runProgram">Ejecutar el programa</span>
            <span id="Games_resetTooltip">Detener el programa y restablecer el nivel.</span>
            <span id="Games_resetProgram">Restablecer</span>
            <span id="Games_help">Ayuda</span>
            <span id="Games_dialogOk">Aceptar</span>
            <span id="Games_dialogCancel">Cancelar</span>
            <span id="Games_catLogic">L\u00f3gica</span>
            <span id="Games_catLoops">Bucles</span>
            <span id="Games_catMath">Matem\u00e1ticas</span>
            <span id="Games_catText">Texto</span>
            <span id="Games_catLists">Listas</span>
            <span id="Games_catColour">Color</span>
            <span id="Games_catVariables">Variables</span>
            <span id="Games_catProcedures">Funciones</span>
            <span id="Games_httpRequestError">Hubo un problema con la petici\u00f3n.</span>
            <span id="Games_linkAlert">Comparte tus bloques con este enlace:\n\n%1</span>
            <span id="Games_hashError">\u00ab%1\u00bb no corresponde con ning\u00fan programa guardado.</span>
            <span id="Games_xmlError">No se pudo cargar el archivo guardado.  \u00bfQuiz\u00e1 fue creado con otra versi\u00f3n de Blockly?</span>
            <span id="Games_listVariable">lista</span>
            <span id="Games_textVariable">texto</span>
        </div>
        <div style="display: none">
            <span id="Maze_moveForward">avanzar</span>
            <span id="Maze_turnLeft">girar a la izquierda</span>
            <span id="Maze_turnRight">girar a la derecha</span>
            <span id="Maze_doCode">hacer</span>
            <span id="Maze_elseCode">sino</span>
            <span id="Maze_helpIfElse">Los bloques \'si-sino\' hacen una cosa o la otra.</span>
            <span id="Maze_pathAhead">si hay camino enfrente</span>
            <span id="Maze_pathLeft">si hay camino a la izquierda</span>
            <span id="Maze_pathRight">si hay camino a la derecha</span>
            <span id="Maze_repeatUntil">repetir hasta</span>
            <span id="Maze_moveForwardTooltip">Mueve al jugador un cuadro hacia delante.</span>
            <span id="Maze_turnTooltip">Gira al jugador a izquierda o derecha 90 grados.</span>
            <span id="Maze_ifTooltip">Si hay un camino en la direcci\u00f3n especificada, \\nentonces ejecuta unas acciones.</span>
            <span id="Maze_ifelseTooltip">Si hay un camino en la direcci\u00f3n especificada, \\nentonces ejecuta el primer bloque de acciones. \\nSino, haz el segundo bloque de acciones.</span>
            <span id="Maze_whileTooltip">Repite las acciones contenidas hasta alcanzar el \\npunto final. </span>
            <span id="Maze_capacity0">Te quedan %0 bloques.</span>
            <span id="Maze_capacity1">Te queda %1 bloque.</span>
            <span id="Maze_capacity2">Te quedan %2 bloques.</span>
        </div>
        <table width="100%">
            <tr>
                <td>
                    <h1>'+('<span id="title">'+(Tc ? '<a href="index.html?lang='+Dc(a)+'">' : '<a href="./?lang='+Dc(a)+'">') + "NIVEL BÁSICO - Laberinto</a> : "+ Dc("Escenario")+"</span>"),
                        c = "&skin=" + Dc(c),
                        e = " &nbsp; ", 
                        f = 1; 11 > f; f++) e += " " +
                        (f == b ? '<span class="level_number level_done" id="level' + Dc(f) + '">' + Dc(f) + "</span>" : 10 == f ?
                        '<a class="level_number" id="level'+Dc(f)+'" href="?lang='+Dc(a)+"&level="+Dc(f)+Dc(c)+'">' +Dc(f)+ "</a>" : 
                        '<a class="level_dot" id="level' + Dc(f) + '" href="?lang=' + Dc(a) + "&level=" + Dc(f) + Dc(c) + '"></a>');
                        return d + e + '
                    </h1>
                </td>
                <td class="farSide">
                    <select id="languageMenu"></select>&nbsp;
                    <button id="linkButton" title="Guardar y enlazar a los bloques.">
                        <img src="javascripts/codefun/common/1x1.gif" class="link icon21">
                    </button>&nbsp;
                    <button id="pegmanButton">
                        <img src="javascripts/codefun/common/1x1.gif">
                        <span id="pegmanButtonArrow"></span>
                    </button>
                </td>
            </tr>
        </table>

        <div id="visualization">
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="svgMaze" width="400px" height="400px">
            <g id="look">
                <path d="M 0,-15 a 15 15 0 0 1 15 15" />
                <path d="M 0,-35 a 35 35 0 0 1 35 35" />
                <path d="M 0,-55 a 55 55 0 0 1 55 55" />
            </g>
            </svg>
            <div id="capacityBubble">
                <div id="capacity"></div>
            </div>
        </div>
        
        <table width="400">
            <tr>
                <td style="width: 190px; text-align: center; vertical-align: top;">
                <td>
                    <button id="runButton" class="primary" title="Hace que el jugador haga lo que dicen los bloques.">
                        <img src="javascripts/codefun/common/1x1.gif" class="run icon21">EJECUTAR
                    </button>
                    <button id="resetButton" class="primary" style="display: none" title="Poner al jugador de nuevo al comienzo del \\nlaberinto. ">
                        <img src="javascripts/codefun/common/1x1.gif" class="stop icon21"> REINICIAR
                    </button>
                </td>
            </tr>
        </table>' +
        ('<xml id="toolbox" style="display: none;">
            <block type="maze_moveForward">moveForward</block>
            <block type="maze_turn"><field name="DIR">turnLeft</field></block>
            <block type="maze_turn"><field name="DIR">turnRight</field></block>' + (2 < b ?
            '<block type="maze_forever"></block>' + (6 == b ?
            '<block type="maze_if"><field name="DIR">isPathLeft</field></block>' : 6 < b ?
            '<block type="maze_if"></block>' + (8 < b ?
            '<block type="maze_ifElse"></block>' : "") : "") : "") + "</xml>") +

        '<div id="blockly"></div>
        <div id="pegmanMenu"></div>
        <div id="dialogShadow" class="dialogAnimate"></div>
        <div id="dialogBorder"></div>
        <div id="dialog"></div>
        <div id="dialogDone" class="dialogHiddenContent">
            <div style="font-size: large; margin: 1em;">\u00a1Felicitaciones!</div>
            <div id="dialogLinesText" style="font-size: large; margin: 1em;"></div>
            <pre id="containerCode"></pre>
            <div id="dialogDoneText" style="font-size: large; margin: 1em;"></div>
            <div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0">
                <button id="doneCancel">No</button>
                <button id="doneOk" class="secondary">Sí</button>
            </div>
        </div>
        <div id="dialogAbort" class="dialogHiddenContent">
            Este nivel es extremadamente dif\u00edcil. \u00bfDeseas saltearlo e ir al siguiente nivel? Siempre puedes regresar m\u00e1s adelante.
            <div id="dialogAbortButtons" class="farSide" style="padding: 1ex 3ex 0">
                <button id="abortCancel">No</button>
                <button id="abortOk" class="secondary">Sí</button>
            </div>
        </div>' +
        ('<div id="dialogStorage" class="dialogHiddenContent">
            <div id="containerStorage"></div>' + Kc() + "</div>") + (1 == b ?
            '<div id="dialogHelpStack" class="dialogHiddenContent">
            </div>' : 2 == b ?
            '<div id="dialogHelpReset" class="dialogHiddenContent">
                <table>
                    <tr>
                        <td>Tu programa no resolvi\u00f3 el laberinto. Presiona "Reiniciar" e intenta otra vez.</td>
                        <td rowspan=2><img src="javascripts/codefun/common/help.png"></td>
                    </tr>
                    <tr>
                        <td><div><img src="maze/help_run.png" class="mirrorImg" height=27 width=141></div></td>
                    </tr>
                </table>
            </div>' : 3 == b || 4 == b ? (3 == b ?
            '<div id="dialogHelpRepeat" class="dialogHiddenContent">
                <table>
                    <tr>
                        <td><img src="maze/help_up.png"></td>
                        <td>Llega al final de este camino usando tan s\u00f3lo dos bloques. Utiliza \'repetir\' para ejecutar un bloque m\u00e1s de una vez.</td>
                        <td><img src="javascripts/codefun/common/help.png"></td>
                    </tr>
                </table>
            </div>' : "") +
            '<div id="dialogHelpCapacity" class="dialogHiddenContent">
                <table>
                    <tr>
                        <td><img src="javascripts/codefun/common/help.png"></td>
                        <td>&nbsp;</td>
                        <td>Has usado todos los bloques para este nivel. Para crear un bloque nuevo, primero debes eliminar un bloque existente.</td>
                    </tr>
                </table>
            </div>
            <div id="dialogHelpRepeatMany" class="dialogHiddenContent">
                <table>
                    <tr>
                        <td><img src="maze/help_up.png"></td>
                        <td>Puedes usar m\u00e1s de un bloque dentro de un bloque \'repetir\'.</td>
                        <td><img src="javascripts/codefun/common/help.png"></td>
                    </tr>
                </table>
            </div>' : 5 == b ?
            '<div id="dialogHelpSkins" class="dialogHiddenContent">
                <table>
                    <tr>
                        <td><img src="javascripts/codefun/common/help.png"></td>
                        <td width="95%">Elige a tu jugador favorito en este men\u00fa.</td>
                        <td><img src="maze/help_up.png"></td>
                    </tr>
                </table>
            </div>' : 6 == b ?
            '<div id="dialogHelpIf" class="dialogHiddenContent">
                <table>
                    <tr>
                        <td><img src="maze/help_up.png"></td>
                        <td>Un bloque \'si\' har\u00e1 algo solamente si la condici\u00f3n es verdadera. Intenta girar a la izquierda si hay camino a la izquierda.</td>
                        <td><img src="javascripts/codefun/common/help.png"></td>
                    </tr>
                </table>
            </div>' : 7 == b ?
            '<div id="dialogHelpMenu" class="dialogHiddenContent">
                <table>
                    <tr>
                        <td><img src="maze/help_up.png"></td>
                        <td id="helpMenuText">Haz clic en %1 en el bloque \'si\' para cambiar su condici\u00f3n.</td>
                        <td><img src="javascripts/codefun/common/help.png"></td>
                    </tr>
                </table>
            </div>' : 9 == b ?
            '<div id="dialogHelpIfElse" class="dialogHiddenContent">
                <table>
                    <tr>
                        <td><img src="maze/help_down.png"></td>
                        <td>Los bloques \'si-sino\' hacen una cosa o la otra.</td>
                        <td><img src="javascripts/codefun/common/help.png"></td>
                    </tr>
                </table>
            </div>' : 10 == b ?
            '<div id="dialogHelpWallFollow" class="dialogHiddenContent">
                <table>
                    <tr>
                        <td><img src="javascripts/codefun/common/help.png"></td>
                        <td>&nbsp;</td>
                        <td>\u00bfPuedes resolver este complicado laberinto? Intenta seguir la pared de la izquierda. \u00a1Solo para programadores avanzados!'+Kc()+"</td>
                    </tr>
                </table>
            </div>" : "")