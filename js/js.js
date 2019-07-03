        var schemaObj = {
            elements: {},
            templates: {},
            resistance: {},
            resistanceStatus: {},
            kzId: {},
            calc: {},
            calcInverse: {},
            defaultVar: {
                unn: 0.4,
                uvn: 6.3,
                ikz: "",
                arcResistance: 5,
                cosPphi: 0.9
            }
        };

        var symbol = {
            energySystem: 'с',
            transformator: 'т',
            kabelVn: 'кб',
            kabelNn: 'кб',
            shinoprovod: 'ш',
            hookup: 'к',
            tt: 'TA',
            avtomat: 'кв',
            unique: '',
            сomplex: 'КН',
            ad: 'АД',
            sd: 'СД'
        };

        var systemSvg = '<img src=\"images/systemSvg.svg\">';
        var transformatorSvg = '<img src=\"images/transformatorSvg.svg\">';
        var hookupSvg = '<img src=\"images/hookupSvg.svg\">';
        var ttSvg = '<img src=\"images/ttSvg.svg\">';
        var klSvg = '<img src=\"images/klSvg.svg\">';
        var avtomatSvg = '<img src=\"images/avtomatSvg.svg\">';
        var shinoprovodSvg = '<img src=\"images/shinoprovodSvg.svg\">';
        var uniqueSvg = '<img src=\"images/uniqueSvg.svg\">';
        var knSvg = '<img src=\"images/knSvg.svg\">';
        var dvigatelSvg = '<img src="images/dvigatelSvg.svg">';
        var pointKzSvg = '<img src=\"images/pointKzSvg.svg\">';

        var ad_ln_Svg = '<img src=\"images/ad_ln.svg\">';
        var ad_p_Svg = '<img src=\"images/ad_p.svg\">';
        var ad_eu_Svg = '<img src=\"images/ad_eu.svg\">';
        var ad_lg_Svg = '<img src=\"images/ad_lg.svg\">';
        var ad_ln_p_Svg = '<img src=\"images/ad_ln_p.svg\">';
        var ad_ln_eu_Svg = '<img src=\"images/ad_ln_eu.svg\">';
        var ln_p_eu_Svg = '<img src=\"images/ln_p_eu.svg\">';

        var reportSysSvg = '<img src=\"images/reportSysSvg.svg\">';
        var reportRSvg = '<img src=\"images/reportRSvg.svg\">';
        var reportRxSvg = '<img src=\"images/reportRxSvg.svg\">';
        var reportXSvg = '<img src=\"images/reportXSvg.svg\">';
        var reportComplexSvg = '<img src=\"images/reportComplexSvg.svg\">';
        var reportAdSvg = '<img src=\"images/reportAdSvg.svg\">';

        var chartRXSvg = '<img src=\"images/chartRXSvg.svg\" class=\"img-responsive\">';
        var chartXRSvg = '<img src=\"images/chartXRSvg.svg\" class=\"img-responsive\">';
        var chart_AD_LN = '<img src=\"images/chart_AD_LN.svg\" class=\"img-responsive\">';
        var chart_AD_P = '<img src=\"images/chart_AD_P.svg\" class=\"img-responsive\">';
        var chart_AD_EU = '<img src=\"images/chart_AD_EU.svg\" class=\"img-responsive\">';
        var chart_AD_LG = '<img src=\"images/chart_AD_LG.svg\" class=\"img-responsive\">';
        var chart_AD_LN_P = '<img src=\"images/chart_AD_LN_P.svg\" class=\"img-responsive\">';
        var chart_AD_LN_EU = '<img src=\"images/chart_AD_LN_EU.svg\" class=\"img-responsive\">';
        var chart_LN_P_EU = '<img src=\"images/chart_LN_P_EU.svg\" class=\"img-responsive\">';

        var chartComplex = {
            AD_LN: chart_AD_LN,
            AD_P: chart_AD_P,
            AD_EU: chart_AD_EU,
            AD_LG: chart_AD_LG,
            AD_LN_P: chart_AD_LN_P,
            AD_LN_EU: chart_AD_LN_EU,
            LN_P_EU: chart_LN_P_EU
        };

        var cosPphiComplex = {
            AD_LN: 0.9,
            AD_P: 0.85,
            AD_EU: 0.85,
            AD_LG: 0.82,
            AD_LN_P: 0.9,
            AD_LN_EU: 0.9,
            LN_P_EU: 0.9
        };

        var energySystemTemplate = [
            new InitTemplateItem('input', 'energySystemUvn', 'form-control w1', schemaObj.defaultVar.uvn, null, '<i>U</i><sub>с.ВН</sub> =&nbsp;', 'changeElementValue', '<div class=\"form-group\">', '</div>', ' кВ', null),
            new InitTemplateItem('input', 'energySystemUnn', 'form-control w1', schemaObj.defaultVar.unn, null, '<i>U</i><sub>с.НН</sub> =&nbsp;', 'changeElementValue', '<div class=\"form-group\">', '</div>', ' кВ', null),
            new InitTemplateItem('input', 'energySystemIkz', 'form-control w1', schemaObj.defaultVar.ikz, null, '<i>I</i><sub>к.ВН</sub><sup>(3)</sup> =&nbsp;', 'changeElementValue', '<div class=\"form-group\">', '</div>', ' кА', null),
        ];
        var transformatorTemplate = [
            new InitTemplateItem('select', 'transformator', 'form-control', null, null, '<i>Трансформатор</i> =&nbsp;', 'changeElementValue', '<div class=\"form-group\">', '</div>', '', 'transformatorArray')
        ];
        var kabelVnTemplate = [
            new InitTemplateItem('select', 'kabelVn', 'form-control w2', null, null, '<i>Кабель</i> =&nbsp;', 'changeElementValue', '<div class=\"form-group\">', '</div>', '', 'kabelArray'),
            new InitTemplateItem('input', 'kabelVnLength', 'form-control w1', '1', null, '<i>Длина</i> =&nbsp;', 'changeElementValue', '<div class=\"form-group\">', '</div>', ' м', null),
            new InitTemplateItem('select', 'kabelVnQuantity', 'form-control', '1', null, '<i>Кол-во</i> =&nbsp;', 'changeElementValue', '<div class=\"form-group\">', '</div>', ' шт.', 'quantityArray')
        ];
        var kabelNnTemplate = [
            new InitTemplateItem('select', 'kabelNn', 'form-control w2', null, null, '<i>Кабель</i> =&nbsp;', 'changeElementValue', '<div class=\"form-group\">', '</div>', '', 'kabelArray'),
            new InitTemplateItem('input', 'kabelNnLength', 'form-control w1', '1', null, '<i>Длина</i> =&nbsp;', 'changeElementValue', '<div class=\"form-group\">', '</div>', ' м', null),
            new InitTemplateItem('select', 'kabelNnQuantity', 'form-control', '1', null, '<i>Кол-во</i> =&nbsp;', 'changeElementValue', '<div class=\"form-group\">', '</div>', ' шт.', 'quantityArray')
        ];
        var shinoprovodTemplate = [
            new InitTemplateItem('select', 'shinoprovod', 'form-control w2', null, null, '<i>Шинопровод</i> =&nbsp;', 'changeElementValue', '<div class=\"form-group\">', '</div>', '', 'shinoprovodArray'),
            new InitTemplateItem('input', 'shinoprovodLength', 'form-control w1', '1', null, '<i>Длина</i> =&nbsp;', 'changeElementValue', '<div class=\"form-group\">', '</div>', ' м', null)
        ];
        var hookupTemplate = [
            new InitTemplateItem('select', 'hookup', 'form-control w2', null, null, '<i>Контактные соединения</i> =&nbsp;', 'changeElementValue', '<div class=\"form-group\">', '</div>', '', 'hookupArray'),
            new InitTemplateItem('input', 'hookupQuantity', 'form-control w1', '1', null, '<i>Кол-во</i> =&nbsp;', 'changeElementValue', '<div class=\"form-group\">', '</div>', ' шт.', null)
        ];
        var ttTemplate = [
            new InitTemplateItem('select', 'tt', 'form-control w2', null, null, '<i>Трансформатор тока</i> =&nbsp;', 'changeElementValue', '<div class=\"form-group\">', '</div>', '', 'ttArray'),
            new InitTemplateItem('input', 'ttQuantity', 'form-control w1', '1', null, '<i>Кол-во</i> =&nbsp;', 'changeElementValue', '<div class=\"form-group\">', '</div>', ' шт.', null)
        ];
        var avtomatTemplate = [
            new InitTemplateItem('select', 'avtomat', 'form-control w2', null, null, '<i>Автомат </i> =&nbsp;', 'changeElementValue', '<div class=\"form-group\">', '</div>', '', 'avtomatArray'),
            new InitTemplateItem('input', 'avtomatQuantity', 'form-control w1', '1', null, '<i>Кол-во</i> =&nbsp;', 'changeElementValue', '<div class=\"form-group\">', '</div>', ' шт.', null)
        ];
        var uniqueTemplate = [
            new InitTemplateItem('input', 'uniqueR', 'form-control w1', '', null, '<i>R</i> =&nbsp;', 'changeElementValue', '<div class=\"form-group\">', '</div>', ' мОм', null),
            new InitTemplateItem('input', 'uniqueX', 'form-control w1', '', null, '<i>X</i> =&nbsp;', 'changeElementValue', '<div class=\"form-group\">', '</div>', ' мОм', null),
            new InitTemplateItem('input', 'uniqueR0', 'form-control w1', '', null, '<i>R</i><sub>0</sub> =&nbsp;', 'changeElementValue', '<div class=\"form-group\">', '</div>', ' мОм', null),
            new InitTemplateItem('input', 'uniqueX0', 'form-control w1', '', null, '<i>X</i><sub>0</sub> =&nbsp;', 'changeElementValue', '<div class=\"form-group\">', '</div>', ' мОм', null),
        ];

        var complexTemplate = [
            new InitTemplateItem('select', 'complexSelector', 'form-control w2', null, null, '<i>Состав потребителей </i> =&nbsp;', 'changeElementComplex', '<div class=\"form-group\">', '</div>', '', 'complexArray'),
            new InitTemplateItem('input', 'complexCosF', 'form-control w1', schemaObj.defaultVar.cosPphi, null, '<i>cos&phi; </i> =&nbsp;', 'changeElementValue', '<div class=\"form-group\">', '</div>', '', null),
        ];

        var adTemplate = [
            new InitTemplateItem('input', 'power', 'form-control w1', null, null, '<i>Мощность </i> =&nbsp;', 'changeElementValue', '<div class=\"form-group\">', '</div>', ' кВт', null),
            new InitTemplateItem('input', 'CosF', 'form-control w1', null, null, '<i>cos&phi; </i> =&nbsp;', 'changeElementValue', '<div class=\"form-group\">', '</div>', '', null),
            new InitTemplateItem('input', 'kpd', 'form-control w1', null, null, '<i>КПД &eta; </i> =&nbsp;', 'changeElementValue', '<div class=\"form-group\">', '</div>', ' %', null),
            new InitTemplateItem('input', 'sNom', 'form-control w1', null, null, '<i>Скольжение  s<sub>ном</sub></i> =&nbsp;', 'changeElementValue', '<div class=\"form-group\">', '</div>', ' %', null),
            new InitTemplateItem('input', 'iPuskToINom', 'form-control w1', null, null, '<i>I<sub>пуск</sub> / I<sub>ном</sub> </i> =&nbsp;', 'changeElementValue', '<div class=\"form-group\">', '</div>', '', null),
            new InitTemplateItem('input', 'mPuskToMNom', 'form-control w1', null, null, '<i>M<sub>пуск</sub> / M<sub>ном</sub> </i> =&nbsp;', 'changeElementValue', '<div class=\"form-group\">', '</div>', '', null),
        ];

        var sdTemplate = [
            new InitTemplateItem('input', 'power', 'form-control w1', null, null, '<i>Мощность </i> =&nbsp;', 'changeElementValue', '<div class=\"form-group\">', '</div>', ' кВт', null),
            new InitTemplateItem('input', 'CosF', 'form-control w1', null, null, '<i>cos&phi; </i> =&nbsp;', 'changeElementValue', '<div class=\"form-group\">', '</div>', '', null),
            new InitTemplateItem('input', 'kpd', 'form-control w1', null, null, '<i>КПД &eta; </i> =&nbsp;', 'changeElementValue', '<div class=\"form-group\">', '</div>', ' %', null),
        ];

        var energySystemResistance = {r: null, x: null, r0: null, x0: null};
        var transformatorResistance = {r: null, x: null, r0: null, x0: null};
        var kabelVnResistance = {r: null, x: null, r0: null, x0: null};
        var kabelNnResistance = {r: null, x: null, r0: null, x0: null};
        var shinoprovodResistance = {r: null, x: null, r0: null, x0: null};
        var hookupResistance = {r: null, x: null, r0: null, x0: null};
        var ttResistance = {r: null, x: null, r0: null, x0: null};
        var avtomatResistance = {r: null, x: null, r0: null, x0: null};
        var uniqueResistance = {r: null, x: null, r0: null, x0: null};
        var complexResistance = {
            powerSum: null,
            current: null,
            cosF: null,
            bazis: null,
            EngRel: null,
            Z1ngRel: null,
            Z2ngRel: null,
            Z0ngRel: null,
            Eng: null,
            Z1ng: null,
            Z2ng: null,
            Z0ng: null
        };
        var adResistance = {
            pmh: null,
            sinF: null,
            current: null,
            r1: null,
            r2: null,
            rad: null,
            xad: null,
            zad: null,
            ead: null
        };
        var sdResistance = {
            sinF: null,
            current: null,
            rsd: null,
            xsd: null,
            zsd: null,
            esd: null
        };

        var energySystemObj = new ElementsDataObj('energySystem', 'Энергосистема', null, null, null, '<div class=\"form-inline\">{tpl}</div>', null, null);
        var transformatorObj = new ElementsDataObj('transformator', 'Трансформатор', null, null, null, '<div class=\"form-inline\">{tpl}</div>', null, null);
        var kabelVnObj = new ElementsDataObj('kabelVn', 'Кабельная линия ВН', null, null, null, '<div class=\"form-inline\">{tpl}</div>', null, null);
        var kabelNnObj = new ElementsDataObj('kabelNn', 'Кабельная линия НН', null, null, null, '<div class=\"form-inline\">{tpl}</div>', null, null);
        var shinoprovodObj = new ElementsDataObj('shinoprovod', 'Шинопровод', null, null, null, '<div class=\"form-inline\">{tpl}</div>', null, null);
        var hookupObj = new ElementsDataObj('hookup', 'Контактные соединения', null, null, null, '<div class=\"form-inline\">{tpl}</div>', null, null);
        var ttObj = new ElementsDataObj('tt', 'Трансформатор тока', null, null, null, '<div class=\"form-inline\">{tpl}</div>', null, null);
        var avtomatObj = new ElementsDataObj('avtomat', 'Автоматический выключатель', null, null, null, '<div class=\"form-inline\">{tpl}</div>', null, null);
        var uniqueObj = new ElementsDataObj('unique', 'Свой элемент', null, null, null, '<div class=\"form-inline\">{tpl}</div>', null, null);
        var complexObj = new ElementsDataObj('complex', 'Комплексная нагрузка', null, null, null, '<div class=\"form-inline\">{tpl}</div>', 2, 'complex-data');
        var adObj = new ElementsDataObj('ad', 'Асинхронный двигатель', null, null, null, '<div class=\"form-inline\">{tpl}</div>', null, null);
        var sdObj = new ElementsDataObj('sd', 'Синхронный двигатель', null, null, null, '<div class=\"form-inline\">{tpl}</div>', null, null);

        var elementObj = {
            energySystem: energySystemObj,
            transformator: transformatorObj,
            kabelVn: kabelVnObj,
            kabelNn: kabelNnObj,
            shinoprovod: shinoprovodObj,
            hookup: hookupObj,
            tt: ttObj,
            avtomat: avtomatObj,
            unique: uniqueObj,
            complex: complexObj,
            ad: adObj,
            sd: sdObj,
        };

        var templateObj = {
            energySystem: energySystemTemplate,
            transformator: transformatorTemplate,
            kabelVn: kabelVnTemplate,
            kabelNn: kabelNnTemplate,
            shinoprovod: shinoprovodTemplate,
            hookup: hookupTemplate,
            tt: ttTemplate,
            avtomat: avtomatTemplate,
            unique: uniqueTemplate,
            complex: complexTemplate,
            ad: adTemplate,
            sd: sdTemplate,
        };

        var resistanceObj = {
            energySystem: energySystemResistance,
            transformator: transformatorResistance,
            kabelVn: kabelVnResistance,
            kabelNn: kabelNnResistance,
            shinoprovod: shinoprovodResistance,
            hookup: hookupResistance,
            tt: ttResistance,
            avtomat: avtomatResistance,
            unique: uniqueResistance,
            complex: complexResistance,
            ad: adResistance,
            sd: sdResistance,
        };

        var textSelectEl = '<p class=\"text-danger\">Выберите элемент сети!</p>';
        var textAddEl = '<p class=\"text-danger\">Добавьте элемент сети!</p>';
        var textAddPointKz = '<p class=\"text-danger\">Укажите точку КЗ!</p>';
        var textAddData = '<p class=\"text-danger\">Введите даные!</p>';
        var textLocalError = '<p class=\"text-danger\">Ошибка при обращении к локальному хранилищу</p>';
        var textDontHaveSavProject = '<p class=\"text-danger\">У Вас нет сохраненных проектов!</p>';
        var textProjectSaved = '<p class=\"text-success\">Спасибо, ваш проект сохранен!</p>';
        var textProjectSendSaved = '<p class=\"text-success\">Спасибо, ваш проект сохранен в файл. Если он не загрузился автоматически, то нажмите кнопку \"Сохранить\" в диалоговом окне.</p>';
        var textSaveFileError = '<p class=\"text-danger\">Ошибка при сохранении проекта в файл!</p>';
        var textLastEl = '<p class=\"text-danger\">Элемент \"{var}\" должен быть последним в схеме!</p>';
        var textCosPphi = '<p class=\"text-danger\">Введите значение cos&phi;!</p>';
        var textResistanceIsNotDefined = '<p class=\"text-danger\">На {var} не определены сопротивления!</p>';
        var textIncorrectData = '<p class=\"text-danger\">Введены некорректные данные!</p>';

        window.onload = function () {
            var elementSelect = document.getElementById("elementSelect");
            var arcSelectVar = document.getElementById("arcSelect");
            var arcInputVar = document.getElementById("arcInput");
            elementSelect.innerHTML = addElementsSelect();
            arcSelectVar.innerHTML = addOption(arcArray, schemaObj.defaultVar.arcResistance);
            arcInputVar.value = schemaObj.defaultVar.arcResistance;

            arcSelectVar.addEventListener("change", function () {
                schemaObj.defaultVar.arcResistance = arcSelectVar.value;
                arcInputVar.value = schemaObj.defaultVar.arcResistance;
            });

            arcInputVar.addEventListener("change", function () {
                schemaObj.defaultVar.arcResistance = convertingData(arcInputVar.value);
                arcSelectVar.innerHTML = addOption(arcArray, schemaObj.defaultVar.arcResistance);
            });
        }

        function ElementsDataObj(key, name, title, rowId, pointKz, tplWrp, divider, dividerInsId) {
            this.key = key;
            this.name = name;
            this.title = title;
            this.rowId = rowId;
            this.pointKz = pointKz;
            this.tplWrp = htmlEncode(tplWrp);
            this.divider = divider;
            this.dividerInsId = dividerInsId;
        }

        function InitTemplateItem(typeItem, idItem, classItem, valueItem, textItem, labelItem, functionItem, wrapperItemStart, wrapperItemEnd, suffixItem, outerData) {
            this.typeItem = typeItem;
            this.idItem = idItem;
            this.classItem = classItem;
            this.valueItem = valueItem;
            this.textItem = textItem;
            this.labelItem = htmlEncode(labelItem);
            this.functionItem = functionItem;
            this.wrapperItemStart = htmlEncode(wrapperItemStart);
            this.wrapperItemEnd = htmlEncode(wrapperItemEnd);
            this.suffixItem = suffixItem;
            this.outerData = outerData;
        }

        function addElementsSelect() {
            let html = '<option value=\"\">--- Выбор элемента сети ---</option>';
            for (let key in elementObj) {
                html += '<option value=' + key + '>' + elementObj[key].name + '</option>';
            }
            return html;
        }

        function addOption(arrayStr, value) {
            let array = eval(arrayStr);
            let html = '';
            let arraySplit;
            for (let i = 0; i < array.length; i++) {
                let selected = '';
                let arraySplit = array[i].split('|');
                let text = arraySplit.pop();
                let val = arraySplit.join('|');
                if (value == val) {
                    selected = 'selected';
                }
                html += '<option value=\"' + val + '\" ' + selected + '>' + text + '</option>';
            }
            return html;
        }

        function prepareTemplate(data) {
            let obj = [];
            for (let i = 0; i < data.length; i++) {
                obj[i] = iterationCopy(data[i]);
            }
            return obj;
        }

        function renderTemplateItemData(element, rowId, insert) {
            if (insert === undefined) {
                insert = false;
            }
            let template = prepareTemplate(templateObj[element]);
            if (insert === true) {
                template = prepareTemplate(schemaObj.templates[rowId]);
            }
            let html = '';
            let tplWrp = schemaObj.elements[rowId].tplWrp;
            let divider = schemaObj.elements[rowId].divider;
            let dividerInsId = schemaObj.elements[rowId].dividerInsId;
            if (tplWrp !== null) {
                tplWrp = tplWrp.split('{tpl}');
            } else {
                tplWrp = ['', ''];
            }
            html += htmlDecode(tplWrp[0]);
            for (let i = 0; i < template.length; i++) {
                if (i == divider) {
                    html += htmlDecode(tplWrp[1]);
                    if (dividerInsId != null) {
                        html += htmlDecode(tplWrp[0].replace('&gt;', 'id=\"' + dividerInsId + '\"&gt;'));
                    } else {
                        html += htmlDecode(tplWrp[0]);
                    }
                }
                let functionItem = '';
                if (template[i].functionItem !== null) {
                    functionItem = 'onchange=\"' + template[i].functionItem + '(this.id, ' + rowId + ')\"';
                }
                let valueItem = template[i].valueItem;
                if (template[i].valueItem === null) {
                    valueItem = '';
                }
                if (template[i].typeItem == "input") {
                    html += htmlDecode(template[i].wrapperItemStart);
                    html += '<label for=\"' + template[i].idItem + rowId + '\">' + htmlDecode(template[i].labelItem) + '</label>';
                    html += '<input id=\"' + template[i].idItem + rowId + '\" ' + functionItem + ' class=\"' + template[i].classItem + '\" type=\"text\" name=\"' + template[i].idItem + '[' + rowId + ']\" value=\"' + valueItem + '\" data-templateArrayKey=\"' + [i] + '\">' + template[i].suffixItem;
                    html += htmlDecode(template[i].wrapperItemEnd);
                } else if (template[i].typeItem == "select") {
                    html += htmlDecode(template[i].wrapperItemStart);
                    html += '<label for=\"' + template[i].idItem + rowId + '\">' + htmlDecode(template[i].labelItem) + '</label>';
                    html += '<select id=\"' + template[i].idItem + rowId + '\" ' + functionItem + ' class=\"' + template[i].classItem + '\" name=\"' + template[i].idItem + '[' + rowId + ']\" data-templateArrayKey=\"' + [i] + '\">';
                    html += addOption(template[i].outerData, template[i].valueItem);
                    html += '</select>' + template[i].suffixItem;
                    html += htmlDecode(template[i].wrapperItemEnd);
                }
            }
            html += htmlDecode(tplWrp[1]);
            if (dividerInsId != null && template.length <= divider) {
                html += '<div id=\"' + dividerInsId + '\" class=\"form-inline\"></div>';
            }
            return html;
        }

        function renderItemScheme(element, rowId, insert) {
            if (insert === undefined) {
                insert = null;
            }
            let img;
            let resistanceData = '';
            if (element == 'energySystem') {
                img = systemSvg;
            } else if (element == 'transformator') {
                img = transformatorSvg;
            } else if (element == 'kabelVn' || element == 'kabelNn') {
                img = klSvg;
            } else if (element == 'shinoprovod') {
                img = shinoprovodSvg;
            } else if (element == 'hookup') {
                img = hookupSvg;
            } else if (element == 'tt') {
                img = ttSvg;
            } else if (element == 'avtomat') {
                img = avtomatSvg;
            } else if (element == 'unique') {
                img = uniqueSvg;
            } else if (element == 'complex') {
                img = knSvg;
            } else if (element == 'ad') {
                img = dvigatelSvg;
            } else if (element == 'sd') {
                img = dvigatelSvg;
            } else {
                img = klSvg;
            }
            if (insert !== null) {
                resistanceData = insert;
            }
            let pointKz = '';
            let pointKzImg = '';
            if (schemaObj.elements[rowId].pointKz !== null) {
                pointKz = ' pointKz';
                pointKzImg = '<span>К' + rowId + '</span> ' + pointKzSvg;
            }
            let html = '';
            html += '<div id=\"' + element + 'Img' + rowId + '\" class=\"' + element + 'Image' + pointKz + '\">';
            html += '   <div id=\"' + element + 'Resistance' + rowId + '\" class=\"resistanceData\">' + resistanceData + '</div>';
            html += '   <div id=\"pointKzWrapper' + rowId + '\" class=\"pointKzWrapper\">' + pointKzImg + '</div>';
            html += '   <div id=\"' + element + 'Svg' + rowId + '\">' + img + '</div>';
            html += '</div>';
            return html;
        }

        function renderItemPointKz(element, rowId, pointKz) {
            let html = '';
            let checked = '';
            if (element != 'complex' && element != 'energySystem' && element != 'ad' && element != 'sd') {
                if (pointKz === undefined) {
                    pointKz = null;
                }
                if (pointKz !== null) {
                    checked = 'checked';
                }
                html += '<input id=\"' + element + 'Checkbox' + rowId + '\" type=\"checkbox\" onchange=\"changeCheckbox(this.id, ' + rowId + ')\" name=\"' + element + 'Checkbox[' + rowId + ']\" ' + checked + '>';
            }
            return html;
        }

        function lastElementObj(obj) {
            let lastElement;
            for (var key in obj) {
                lastElement = obj[key];
            }
            return lastElement;
        }

        function firstElementObj(obj) {
            let i = 0;
            for (var key in obj) {
                if (i == 0) return obj[key];
                i++;
            }
        }

        function deleteRow(rowId) {
            document.getElementById("row" + rowId + "").outerHTML = "";
            delete schemaObj.elements[rowId];
            delete schemaObj.templates[rowId];
            delete schemaObj.resistance[rowId];
            delete schemaObj.resistanceStatus[rowId];
            delete schemaObj.kzId[rowId];
            delete schemaObj.calc[rowId];
            delete schemaObj.calcInverse[rowId];
            //console.log(schemaObj);
        }

        function addRow() {
            let elementSelect = document.getElementById("elementSelect").value;
            if (elementSelect != '') {
                let lastElement = lastElementObj(schemaObj.elements);
                if ((lastElement && lastElement.key == 'complex') || (lastElement && lastElement.key == 'ad') || (lastElement && lastElement.key == 'sd')) {
                    customModal(textLastEl, lastElement.name);
                } else {
                    let html = "";
                    let table = document.getElementById("tableKz");
                    let rowId = (table.rows.length) - 1;
                    elementObj[elementSelect].rowId = rowId;
                    schemaObj.elements[rowId] = iterationCopy(elementObj[elementSelect]);
                    schemaObj.templates[rowId] = prepareTemplate(templateObj[elementSelect]);
                    schemaObj.resistance[rowId] = iterationCopy(resistanceObj[elementSelect]);
                    schemaObj.resistanceStatus[rowId] = false;
                    html += "<tr id='row" + rowId + "'>";
                    html += "   <td id='elementSelect" + rowId + "'>";
                    html += "       <div class='form-inline'>";
                    html += "           <div class='form-group'><label>" + rowId + "</label>&nbsp;";
                    html += "               <input id='elementSelectVal" + rowId + "' class='form-control select' type='text' name='elementSelectVal[" + rowId + "]' onchange='changeElementTitleValue(this.id," + rowId + ")' value='" + elementObj[elementSelect].name + "'>";
                    html += "           </div>";
                    html += "       </div>";
                    html += "   </td>";
                    html += "   <td id='elementScheme" + rowId + "' class='elementScheme'>" + renderItemScheme(elementSelect, rowId) + "</td>";
                    html += "   <td id='elementData" + rowId + "' class='elementData'>" + renderTemplateItemData(elementSelect, rowId) + "</td>";
                    html += "   <td id='pointKz" + rowId + "' class='elementPointKz'>" + renderItemPointKz(elementSelect, rowId) + "</td>";
                    html += "   <td><input type='button' value='Удалить' class='delete btn btn-danger' onclick='deleteRow(" + rowId + ")'></td>";
                    html += "</tr>";
                    let row = table.insertRow(rowId).outerHTML = html;
                }
            } else {
                customModal(textSelectEl);
            }
        }

        function changeElementValue(elementId, rowId) {
            let element = document.getElementById(elementId);
            let elementValue = element.value;
            let templateArrayKey = element.getAttribute('data-templateArrayKey');
            let elementText = null;
            let data;
            if (schemaObj.templates[rowId][templateArrayKey].typeItem == "select") {
                elementText = element.options[element.selectedIndex].text;
                if (elementValue == '' || elementValue === null) {
                    elementValue = null;
                }
                schemaObj.templates[rowId][templateArrayKey].valueItem = elementValue;
            } else {
                data = convertingData(elementValue);
                if (data == '' || data == 0 || data === null) {
                    data = null;
                }
                schemaObj.templates[rowId][templateArrayKey].valueItem = data;
                element.value = data;
                element.setAttribute('value', data);
            }
            schemaObj.templates[rowId][templateArrayKey].textItem = elementText;
            calcResistance(rowId);
            addResistance(rowId);
            //console.log(schemaObj);  
        }

        function changeElementTitleValue(elementId, rowId) {
            let element = document.getElementById(elementId);
            let elementValue = element.value;
            schemaObj.elements[rowId].title = elementValue.replace(/[\\\|\'\"\#^\:\;\\$\%\&\?\/]/g, '');
        }

        function changeElementImg(rowId, elSelectValue) {
            let elementImg = document.getElementById('complexSvg' + rowId);
            let img;
            if (elSelectValue == '' || elSelectValue === null || elSelectValue === undefined) {
                img = knSvg;
            } else if (elSelectValue == 'AD_LN') {
                img = ad_ln_Svg;
            } else if (elSelectValue == 'AD_P') {
                img = ad_p_Svg;
            } else if (elSelectValue == 'AD_EU') {
                img = ad_eu_Svg;
            } else if (elSelectValue == 'AD_LG') {
                img = ad_lg_Svg;
            } else if (elSelectValue == 'AD_LN_P') {
                img = ad_ln_p_Svg;
            } else if (elSelectValue == 'AD_LN_EU') {
                img = ad_ln_eu_Svg;
            } else if (elSelectValue == 'LN_P_EU') {
                img = ln_p_eu_Svg;
            }
            elementImg.innerHTML = img;
        }

        function changeElementCos(rowId, elSelectValue) {
            let elementCos = document.getElementById('complexCosF' + rowId);
            let val;
            if (elSelectValue == '' || elSelectValue === null || elSelectValue === undefined) {
                val = schemaObj.defaultVar.cosPphi;
            } else {
                val = cosPphiComplex[elSelectValue];
            }
            elementCos.value = val;
            schemaObj.templates[rowId][1].valueItem = val;
        }

        function changeCheckbox(elementId, rowId) {
            let checkbox = document.getElementById(elementId);
            let img = document.getElementById(elementId.replace('Checkbox', 'Img'));
            let pointKzWrapper = document.getElementById("pointKzWrapper" + rowId);
            if (checkbox.checked) {
                schemaObj.kzId[rowId] = elementId;
                schemaObj.elements[rowId].pointKz = rowId;
                img.classList.add('pointKz');
                pointKzWrapper.innerHTML = '<span>К' + rowId + '</span> ' + pointKzSvg;
            } else {
                delete schemaObj.kzId[rowId];
                schemaObj.elements[rowId].pointKz = null;
                img.classList.remove('pointKz');
                pointKzWrapper.innerHTML = '';
            }
        }

        function calcResistance(rowId) {
            let element = schemaObj.elements[rowId];
            let template = schemaObj.templates[rowId];
            let resistance;
            if (element.key == 'energySystem') {
                resistance = calcResistanceEnergySystem(rowId, template);
                addResistanceToSchema(rowId, resistance);
            } else if (element.key == 'transformator') {
                resistance = calcResistanceTransformator(rowId, template);
                addResistanceToSchema(rowId, resistance);
            } else if (element.key == 'kabelVn' || element.key == 'kabelNn') {
                resistance = calcResistanceKabel(rowId, template, element.key);
                addResistanceToSchema(rowId, resistance);
            } else if (element.key == 'shinoprovod') {
                resistance = calcResistanceShinoprovod(rowId, template);
                addResistanceToSchema(rowId, resistance);
            } else if (element.key == 'hookup') {
                resistance = calcResistanceHookup(rowId, template);
                addResistanceToSchema(rowId, resistance);
            } else if (element.key == 'tt' || element.key == 'avtomat') {
                resistance = calcResistanceTt(rowId, template);
                addResistanceToSchema(rowId, resistance);
            } else if (element.key == 'unique') {
                resistance = calcResistanceUnique(rowId, template);
                addResistanceToSchema(rowId, resistance);
            } else if (element.key == 'complex') {
                calcResistanceComplex(rowId, template);
            } else if (element.key == 'ad') {
                calcResistanceAd(rowId, template);
            } else if (element.key == 'sd') {
                calcResistanceSd(rowId, template);
            }
        }

        function addResistanceToSchema(rowId, resistance) {
            schemaObj.resistance[rowId].r = resistance[0]; //r
            schemaObj.resistance[rowId].x = resistance[1];  //x
            schemaObj.resistance[rowId].r0 = resistance[2]; //r0
            schemaObj.resistance[rowId].x0 = resistance[3]; //x0
            schemaObj.resistanceStatus[rowId] = true;
        }

        function calcResistanceEnergySystem(rowId, template) {
            let uvn = template[0].valueItem;
            let unn = template[1].valueItem;
            let ikz = template[2].valueItem;
            let r = null, x = null, r0 = null, x0 = null;
            if (uvn !== null && unn !== null && ikz !== null) {
                schemaObj.defaultVar.uvn = uvn;
                schemaObj.defaultVar.unn = unn;
                schemaObj.defaultVar.ikz = ikz;
                let xcvn = uvn / (Math.sqrt(3) * ikz);
                r = 0;
                x = 1000 * xcvn * Math.pow((unn / uvn), 2);
                r0 = 0;
                x0 = 0;
            }
            return [r, x, r0, x0];
        }

        function calcResistanceTransformator(rowId, template) {
            let val = template[0].valueItem;
            let r = null, x = null, r0 = null, x0 = null;
            if (val !== null) {
                let value = val.split('|');
                r = value[0] * 1;
                x = value[1] * 1;
                r0 = value[2] * 1;
                x0 = value[3] * 1;
            }
            return [r, x, r0, x0];
        }

        function calcResistanceKabel(rowId, template, elementKey) {
            let val = template[0].valueItem;
            let length = template[1].valueItem;
            let quantity = template[2].valueItem;
            let r = null, x = null, r0 = null, x0 = null;
            if (val !== null) {
                let value = val.split('|');
                let kabelResist = [];
                let vnToNn = 1;
                if (elementKey == 'kabelVn') {
                    vnToNn = (Math.pow(schemaObj.defaultVar.unn, 2) / (Math.pow(schemaObj.defaultVar.uvn, 2)));
                }
                for (let i = 0; i < value.length; i++) {
                    kabelResist[i] = ((value[i] * length) / quantity) * vnToNn;
                }
                r = kabelResist[0];
                x = kabelResist[1];
                r0 = kabelResist[2];
                x0 = kabelResist[3];
            }
            return [r, x, r0, x0];
        }

        function calcResistanceShinoprovod(rowId, template) {
            let val = template[0].valueItem;
            let length = template[1].valueItem;
            let r = null, x = null, r0 = null, x0 = null;
            if (val !== null) {
                let value = val.split('|');
                r = value[0] * length;
                x = value[1] * length;
                r0 = (value[0] * length) + (3 * value[2] * length);
                x0 = (value[1] * length) + (3 * value[3] * length);
            }
            return [r, x, r0, x0];
        }

        function calcResistanceHookup(rowId, template) {
            let val = template[0].valueItem;
            let quantity = template[1].valueItem;
            let r = null, x = null, r0 = null, x0 = null;
            if (val !== null) {
                let value = val.split('|');
                r = value[0] * quantity;
                x = 0;
                r0 = value[2] * quantity;
                x0 = 0;
            }
            return [r, x, r0, x0];
        }

        function calcResistanceTt(rowId, template) {
            let val = template[0].valueItem;
            let quantity = template[1].valueItem;
            let r = null, x = null, r0 = null, x0 = null;
            if (val !== null) {
                let value = val.split('|');
                r = value[0] * quantity;
                x = value[1] * quantity;
                r0 = value[2] * quantity;
                x0 = value[3] * quantity;
            }
            return [r, x, r0, x0];
        }

        function calcResistanceUnique(rowId, template) {
            let r = null, x = null, r0 = null, x0 = null;
            r = template[0].valueItem * 1;
            x = template[1].valueItem * 1;
            r0 = template[2].valueItem * 1;
            x0 = template[3].valueItem * 1;
            return [r, x, r0, x0];
        }

        function calcResistanceComplex(rowId, template) {
            let element = template[0].valueItem;
            let cosF = template[1].valueItem * 1;
            let power = [];
            let powerVal = [];
            if (element != null) {
                for (let i = 2; i < template.length; i++) {
                    let type = template[i].idItem.split('_');
                    let status = true;
                    if (template[i].valueItem == '' || template[i].valueItem == null) {
                        status = false;
                    }
                    power.push({
                        type: type[0],
                        value: template[i].valueItem,
                        id: template[i].idItem,
                        valueStatus: status
                    });
                    powerVal.push(template[i].valueItem);
                }
                if (isValueInObj(power, false, 'valueStatus') == true) {
                    let powerSum = powerVal.reduce(function (sum, current) {
                        return +sum + +current;
                    }, 0);

                    let resPower = power.map(function (item) {
                        let resPower = item.value / powerSum;
                        let data = eval(element);
                        let Eng = data.Eng[item.type];
                        let Z1ng = data.Z1ng[item.type];
                        let Z2ng = data.Z2ng[item.type];
                        let Z0ng = data.Z0ng[item.type];
                        let result = [resPower, Eng, Z1ng, Z2ng, Z0ng];
                        return result;
                    });

                    let koef = [];
                    for (let j = 0; j < resPower.length; j++) {
                        koef.push([getKoef(resPower[j][0], resPower[j][1]), getKoef(resPower[j][0], resPower[j][2]), getKoef(resPower[j][0], resPower[j][3]), getKoef(resPower[j][0], resPower[j][4])]);
                    }

                    let resist = {};
                    let Eng = 0, Z1ng = 0, Z2ng = 0, Z0ng = 0;
                    if (cosF == 0) {
                        customModal(textCosPphi);
                    } else {
                        let current = powerSum / (Math.sqrt(3) * schemaObj.defaultVar.unn * cosF);
                        let bazis = (380 * 1000) / (Math.sqrt(3) * current);
                        for (var j = 0; j < resPower.length; j++) {
                            Eng += getKoef(resPower[j][0], resPower[j][1]);
                            Z1ng += getKoef(resPower[j][0], resPower[j][2]);
                            Z2ng += getKoef(resPower[j][0], resPower[j][3]);
                            Z0ng += getKoef(resPower[j][0], resPower[j][4]);
                        }

                        if (bazis && Eng && Z1ng && Z2ng && Z0ng) {
                            resist = {
                                Eng: 380 * Eng / j,
                                Z1ng: bazis * Z1ng / j,
                                Z2ng: bazis * Z2ng / j,
                                Z0ng: bazis * Z0ng / j
                            };
                            schemaObj.resistance[rowId].powerSum = powerSum;
                            schemaObj.resistance[rowId].current = current;
                            schemaObj.resistance[rowId].cosF = cosF;
                            schemaObj.resistance[rowId].bazis = bazis;
                            schemaObj.resistance[rowId].EngRel = Eng / j;
                            schemaObj.resistance[rowId].Z1ngRel = Z1ng / j;
                            schemaObj.resistance[rowId].Z2ngRel = Z2ng / j;
                            schemaObj.resistance[rowId].Z0ngRel = Z0ng / j;
                            schemaObj.resistance[rowId].Eng = resist.Eng;
                            schemaObj.resistance[rowId].Z1ng = resist.Z1ng;
                            schemaObj.resistance[rowId].Z2ng = resist.Z2ng;
                            schemaObj.resistance[rowId].Z0ng = resist.Z0ng;
                            schemaObj.resistanceStatus[rowId] = true;
                            addResistance(rowId);
                        } else {
                            schemaObj.resistanceStatus[rowId] = false;
                        }
                    }
                } else {
                    schemaObj.resistanceStatus[rowId] = false;
                    addResistance(rowId);
                }
            }
        }

        function calcResistanceAd(rowId, template) {
            let power = template[0].valueItem * 1;
            let cosF = template[1].valueItem * 1;
            let kpd = template[2].valueItem * 1;
            let sNom = template[3].valueItem * 1;
            let iPuskToINom = template[4].valueItem * 1;
            let mPuskToMNom = template[5].valueItem * 1;
            let error = false;
            let r1 = null, r2 = null, rad = null, xad = null, zad = null, ead = null, pmh = null, inom = null,
                sinF = null;
            if (power != '' && cosF != '' && kpd != '' && sNom != '' && iPuskToINom != '' && mPuskToMNom != '') {
                pmh = 0.02 * power;
                sinF = Math.sin(Math.acos(cosF));
                inom = power / (Math.sqrt(3) * 0.38 * cosF * (kpd / 100));
                r2 = (0.36 * mPuskToMNom * (power - pmh)) * 1000000 / (Math.pow(iPuskToINom, 2) * Math.pow(inom, 2) * (1 - (sNom / 100)));
                r1 = (sNom / 100) * ((Math.pow(0.38, 2) * cosF * 1000000) / power);
                zad = (380 * 1000) / (Math.sqrt(3) * iPuskToINom * inom);
                rad = r1 + (0.96 * r2);
                xad = Math.sqrt(Math.pow(zad, 2) - Math.pow(rad, 2));
                ead = Math.sqrt(Math.pow(((220 * cosF) - (inom * rad / 1000)), 2) + Math.pow(((220 * sinF) - (inom * xad / 1000)), 2));
                if (zad < rad) {
                    customModal(textIncorrectData);
                } else {
                    schemaObj.resistance[rowId].pmh = pmh;
                    schemaObj.resistance[rowId].sinF = sinF;
                    schemaObj.resistance[rowId].current = inom;
                    schemaObj.resistance[rowId].r1 = r1;
                    schemaObj.resistance[rowId].r2 = r2;
                    schemaObj.resistance[rowId].rad = rad;
                    schemaObj.resistance[rowId].xad = xad;
                    schemaObj.resistance[rowId].zad = zad;
                    schemaObj.resistance[rowId].ead = ead;
                    schemaObj.resistanceStatus[rowId] = true;
                    addResistance(rowId);
                }
            } else {
                schemaObj.resistanceStatus[rowId] = false;
            }
        }

        function calcResistanceSd(rowId, template) {
            let power = template[0].valueItem * 1;
            let cosF = template[1].valueItem * 1;
            let kpd = template[2].valueItem * 1;
            let error = false;
            let rsd = null, xsd = null, zsd = null, esd = null, inom = null, sinF = null;
            if (kpd == null || kpd == '' || kpd == 0) {
                kpd = 1;
            } else {
                kpd = kpd / 100;
            }
            if (power != '' && cosF != '') {
                sinF = Math.sin(Math.acos(cosF));
                inom = power / (Math.sqrt(3) * 0.38 * cosF * kpd);
                zsd = (380 * 1000) / (Math.sqrt(3) * inom);
                xsd = 0.15 * zsd;
                rsd = 0.15 * xsd;
                esd = Math.sqrt(Math.pow(220 - (inom * (xsd / 1000) * sinF), 2) + Math.pow(inom * (xsd / 1000) * cosF, 2));
                schemaObj.resistance[rowId].sinF = sinF;
                schemaObj.resistance[rowId].current = inom;
                schemaObj.resistance[rowId].rsd = rsd;
                schemaObj.resistance[rowId].xsd = xsd;
                schemaObj.resistance[rowId].zsd = zsd;
                schemaObj.resistance[rowId].esd = esd;
                schemaObj.resistanceStatus[rowId] = true;
                addResistance(rowId);
            } else {
                schemaObj.resistanceStatus[rowId] = false;
            }
        }

        function getKoef(power, obj) {
            let result;
            if (typeof obj == "object") {
                for (let key in obj) {
                    result = obj[key];
                    key = +key;
                    if (key > power) {
                        break;
                    }
                }
            } else {
                result = 0;
            }
            return result;
        }

        function isValueInObj(obj, value, property) {
            let result = false;
            for (let key in obj) {
                let element = obj[key];
                if (property != undefined) {
                    element = obj[key][property];
                }
                if (element == value) {
                    return result = false;
                } else {
                    result = true;
                }
            }
            return result;
        }

        function addResistance(rowId, insert) {
            if (insert === undefined) {
                insert = false;
            }
            let html = '';
            html += '<span>';
            if (schemaObj.elements[rowId].key == 'complex') {
                if (schemaObj.resistanceStatus[rowId] != false) {
                    if (schemaObj.resistance[rowId].Z1ng !== 0 && schemaObj.resistance[rowId].Z1ng !== null) {
                        html += 'Z<sub>1нг</sub>=' + customRound(schemaObj.resistance[rowId].Z1ng, 1) + ' мОм<br>';
                        html += 'Z<sub>2нг</sub>=' + customRound(schemaObj.resistance[rowId].Z2ng, 1) + ' мОм<br>';
                        html += 'Z<sub>0нг</sub>=' + customRound(schemaObj.resistance[rowId].Z0ng, 1) + ' мОм<br>';
                        html += 'E&Prime;<sub>нг</sub>=' + customRound(schemaObj.resistance[rowId].Eng, 1) + ' В<br>';
                    }
                }
            } else if (schemaObj.elements[rowId].key == 'ad') {
                if (schemaObj.resistanceStatus[rowId] != false) {
                    if (schemaObj.resistance[rowId].ead !== 0 && schemaObj.resistance[rowId].ead !== null) {
                        html += 'X&Prime;<sub>ад</sub>=' + customRound(schemaObj.resistance[rowId].xad, 1) + ' мОм<br>';
                        html += 'R<sub>ад</sub>=' + customRound(schemaObj.resistance[rowId].rad, 1) + ' мОм<br>';
                        html += 'E&Prime;<sub>ф.ад</sub>=' + customRound(schemaObj.resistance[rowId].ead, 1) + ' В<br>';
                    }
                }
            } else if (schemaObj.elements[rowId].key == 'sd') {
                if (schemaObj.resistanceStatus[rowId] != false) {
                    if (schemaObj.resistance[rowId].esd !== 0 && schemaObj.resistance[rowId].esd !== null) {
                        html += 'X&Prime;<sub>d</sub>=' + customRound(schemaObj.resistance[rowId].xsd, 1) + ' мОм<br>';
                        html += 'R<sub>сд</sub>=' + customRound(schemaObj.resistance[rowId].rsd, 1) + ' мОм<br>';
                        html += 'E&Prime;<sub>ф.сд</sub>=' + customRound(schemaObj.resistance[rowId].esd, 1) + ' В<br>';
                    }
                }
            } else {
                if (schemaObj.resistanceStatus[rowId] != false) {
                    if (schemaObj.resistance[rowId].x !== 0 && schemaObj.resistance[rowId].x !== null) {
                        html += 'X<sub>' + symbol[schemaObj.elements[rowId].key] + '</sub>=' + customRound(schemaObj.resistance[rowId].x) + ' мОм<br>';
                    }
                    if (schemaObj.resistance[rowId].x0 !== 0 && schemaObj.resistance[rowId].x0 !== null) {
                        html += 'X<sub>0' + symbol[schemaObj.elements[rowId].key] + '</sub>=' + customRound(schemaObj.resistance[rowId].x0) + ' мОм<br>';
                    }
                    if (schemaObj.resistance[rowId].r !== 0 && schemaObj.resistance[rowId].r !== null) {
                        html += 'R<sub>' + symbol[schemaObj.elements[rowId].key] + '</sub>=' + customRound(schemaObj.resistance[rowId].r) + ' мОм<br>';
                    }
                    if (schemaObj.resistance[rowId].r0 !== 0 && schemaObj.resistance[rowId].r0 !== null) {
                        html += 'R<sub>0' + symbol[schemaObj.elements[rowId].key] + '</sub>=' + customRound(schemaObj.resistance[rowId].r0) + ' мОм<br>';
                    }

                }
            }
            html += '</span>';
            if (insert === false) {
                let id = document.getElementById(schemaObj.elements[rowId].key + 'Resistance' + rowId);
                id.innerHTML = html;
            } else {
                return html;
            }
        }

        function convertingData(data) {
            let result = data.replace(',', '.');
            result = result.replace(/[^0-9.]?/g, '');
            result = result.replace(/^([^\.]*\.)|\./g, '$1');
            return result;
        }

        function isEmptyObject(obj) { //0-если пустой
            let counter = 0;
            for (let key in obj) {
                counter++;
            }
            return counter;
        }

        function customModal(text, variable) {
            text = text.replace('{var}', variable);
            let modal = document.getElementById('modal');
            modal.style.display = 'none';
            let span = document.getElementById('modal-close');
            let content = document.getElementById('modal-content');
            let body = document.getElementById('modal-body');
            modal.style.display = 'block';
            modal.classList.add('in');
            body.innerHTML = text;
            span.onclick = function () {
                modal.classList.remove('in');
                modal.style.display = 'none';
            }
            window.onclick = function (event) {
                if (event.target == modal) {
                    modal.style.display = 'none';
                    modal.classList.remove('in');
                }
            }
        }

        function tokKz() {
            let countPointKz = isEmptyObject(schemaObj.kzId);
            let x = 0;
            let r = 0;
            let error = [];
            if (isEmptyObject(schemaObj.resistance) === 0) {
                customModal(textAddEl);
            } else {
                if (countPointKz == 0) {
                    customModal(textAddPointKz);
                } else {
                    let calc = {};
                    let calcInverse = {};
                    for (let kzIdkey in schemaObj.kzId) {
                        let result = {};
                        let resultInverse = {};
                        result.r = result.x = result.r0 = result.x0 = result.ik3max = result.ik3min = result.ik2 = result.ik1 = 0;
                        resultInverse.r = resultInverse.x = resultInverse.r0 = resultInverse.x0 = 0;
                        for (let rowId in schemaObj.resistance) {
                            result.r += schemaObj.resistance[rowId].r;
                            result.x += schemaObj.resistance[rowId].x;
                            result.r0 += schemaObj.resistance[rowId].r0;
                            result.x0 += schemaObj.resistance[rowId].x0;
                            if (schemaObj.resistance[rowId].r === null || schemaObj.resistance[rowId].x === null || !isFinite(schemaObj.resistance[rowId].r) || !isFinite(schemaObj.resistance[rowId].x) || (schemaObj.resistance[rowId].r == 0 && schemaObj.resistance[rowId].x == 0 && schemaObj.resistance[rowId].r0 == 0 && schemaObj.resistance[rowId].x0 == 0)) {
                                error.push(rowId);
                            }
                            if (kzIdkey == rowId) break;
                        }
                        for (let rowId in schemaObj.resistance) { //Inverse
                            if ((schemaObj.elements[rowId].key == 'complex' && schemaObj.resistanceStatus[rowId] == false) || (schemaObj.elements[rowId].key == 'ad' && schemaObj.resistanceStatus[rowId] == false) || (schemaObj.elements[rowId].key == 'sd' && schemaObj.resistanceStatus[rowId] == false)) {
                                error.push(rowId);
                            }
                            if (rowId <= kzIdkey || schemaObj.elements[rowId].key == 'complex' || schemaObj.elements[rowId].key == 'ad' || schemaObj.elements[rowId].key == 'sd') {
                                continue;
                            } else {
                                resultInverse.r += schemaObj.resistance[rowId].r;
                                resultInverse.x += schemaObj.resistance[rowId].x;
                                resultInverse.r0 += schemaObj.resistance[rowId].r0;
                                resultInverse.x0 += schemaObj.resistance[rowId].x0;
                            }
                        }
                        calcTokKz(result);
                        calcTokKzInverse(resultInverse);
                        calc[kzIdkey] = result;
                        calcInverse[kzIdkey] = resultInverse;
                    }
                    schemaObj.calc = calc;
                    schemaObj.calcInverse = calcInverse;
                    reportTokKz(error);
                }
            }
            console.log(schemaObj);
        }

        function calcTokKz(obj) {
            let arcResistance = schemaObj.defaultVar.arcResistance * 1;
            obj.ik3max = (schemaObj.defaultVar.unn * 1000) / (Math.sqrt(3) * Math.sqrt(Math.pow(obj.x, 2) + Math.pow(obj.r, 2)));
            obj.ik3min = (schemaObj.defaultVar.unn * 1000) / (Math.sqrt(3) * Math.sqrt(Math.pow(obj.x, 2) + Math.pow(obj.r + arcResistance, 2)));
            obj.iudmax = Math.sqrt(2) * obj.ik3max * koefUd(obj.r, obj.x);
            obj.iudmin = Math.sqrt(2) * obj.ik3min * koefUd(obj.r + arcResistance, obj.x);
            obj.ia0max = Math.sqrt(2) * obj.ik3max;
            obj.ia0min = Math.sqrt(2) * obj.ik3min;
            obj.ik2max = (schemaObj.defaultVar.unn * 1000) / (2 * Math.sqrt(Math.pow(obj.x, 2) + Math.pow(obj.r, 2)));
            obj.ik2min = (schemaObj.defaultVar.unn * 1000) / (2 * Math.sqrt(Math.pow(obj.x, 2) + Math.pow(obj.r + arcResistance / 2, 2)));
            obj.ik1max = (schemaObj.defaultVar.unn * 1000 * Math.sqrt(3)) / Math.sqrt(Math.pow((2 * obj.x) + obj.x0, 2) + Math.pow((2 * (obj.r)) + (obj.r0), 2));
            obj.ik1min = (schemaObj.defaultVar.unn * 1000 * Math.sqrt(3)) / Math.sqrt(Math.pow((2 * obj.x) + obj.x0, 2) + Math.pow((2 * (obj.r + arcResistance)) + (obj.r0 + arcResistance), 2));
            return obj;
        }

        function calcTokKzInverse(obj) {
            let lastElement = lastElementObj(schemaObj.elements);
            let resistance = schemaObj.resistance[lastElement.rowId];
            let arcResistance = schemaObj.defaultVar.arcResistance * 1;
            if (lastElement && lastElement.key == 'complex') {
                let sinF = Math.sin(Math.acos(resistance.cosF));
                obj.ik3max = resistance.Eng / (Math.sqrt(3) * Math.sqrt(Math.pow(resistance.Z1ng * resistance.cosF + obj.r, 2) + Math.pow(resistance.Z1ng * sinF + obj.x, 2)));
                obj.ik3min = resistance.Eng / (Math.sqrt(3) * Math.sqrt(Math.pow(resistance.Z1ng * resistance.cosF + obj.r + arcResistance, 2) + Math.pow(resistance.Z1ng * sinF + obj.x, 2)));
                obj.ia0max = Math.sqrt(2) * obj.ik3max;
                obj.ia0min = Math.sqrt(2) * obj.ik3min;
                obj.iudmax = Math.sqrt(2) * obj.ik3max * koefUd(obj.r, obj.x);
                obj.iudmin = Math.sqrt(2) * obj.ik3min * koefUd(obj.r + arcResistance, obj.x);

            } else if (lastElement && lastElement.key == 'ad') {
                obj.ik3max = resistance.ead / (Math.sqrt(Math.pow(resistance.rad + obj.r, 2) + Math.pow(resistance.xad + obj.x, 2)));
                obj.ik3min = resistance.ead / (Math.sqrt(Math.pow(resistance.rad + obj.r + arcResistance, 2) + Math.pow(resistance.xad + obj.x, 2)));
                obj.ia0max = Math.sqrt(2) * obj.ik3max;
                obj.ia0min = Math.sqrt(2) * obj.ik3min;
                let tp = (resistance.xad + obj.x) / (314 * resistance.r2);
                let ta = (resistance.xad + obj.x) / (314 * (resistance.r1 + obj.r));
                let taMin = (resistance.xad + obj.x) / (314 * (resistance.r1 + obj.r + arcResistance));
                obj.iudmax = Math.sqrt(2) * obj.ik3max * (Math.exp(-0.01 / tp) + Math.exp(-0.01 / ta));
                obj.iudmin = Math.sqrt(2) * obj.ik3min * (Math.exp(-0.01 / tp) + Math.exp(-0.01 / taMin));
            } else if (lastElement && lastElement.key == 'sd') {
                obj.ik3max = resistance.esd / (Math.sqrt(Math.pow(resistance.rsd + obj.r, 2) + Math.pow(resistance.xsd + obj.x, 2)));
                obj.ik3min = resistance.esd / (Math.sqrt(Math.pow(resistance.rsd + obj.r + arcResistance, 2) + Math.pow(resistance.xsd + obj.x, 2)));
                obj.ia0max = Math.sqrt(2) * obj.ik3max;
                obj.ia0min = Math.sqrt(2) * obj.ik3min;
                let ta = (resistance.xsd + obj.x) / (314 * (resistance.rsd + obj.r));
                let taMin = (resistance.xsd + obj.x) / (314 * (resistance.rsd + obj.r + arcResistance));
                obj.iudmax = Math.sqrt(2) * obj.ik3max * (1 + Math.exp(-0.01 / ta));
                obj.iudmin = Math.sqrt(2) * obj.ik3min * (1 + Math.exp(-0.01 / taMin));
            }
            return obj;
        }

        function getErrorItems(error) {
            error = error.sort(function (a, b) {
                return a - b;
            });
            let result = error.filter(onlyUnique).join(', ');
            if (result.split(',').length > 1) {
                result = 'участках ' + result;
            } else {
                result = 'участке ' + result;
            }
            return result;
        }

        function onlyUnique(value, index, self) {
            return self.indexOf(value) === index;
        }

        function reportTokKz(error) {
            let calc = schemaObj.calc;
            let lastElement = lastElementObj(schemaObj.elements);
            let firstElement = firstElementObj(schemaObj.elements);
            let string = "";
            if (typeof calc === 'undefined' || isEmptyObject(calc) === 0) {
                customModal(textAddData);
            } else {
                if (error.length > 0) {
                    customModal(textResistanceIsNotDefined, getErrorItems(error));
                } else {
                    let rowspan = 3
                    if ((lastElement && lastElement.key == 'complex') || (lastElement && lastElement.key == 'ad') || (lastElement && lastElement.key == 'sd')) {
                        rowspan = rowspan + 2;
                    }
                    string += "<h3>Результаты расчета токов КЗ</h3>";
                    string += "<table class=\"table table-bordered text-center\">";
                    string += "<thead class=\"text-center\"><tr>";
                    string += "    <th rowspan='2'>Точка КЗ</th>";
                    string += "    <th rowspan='2'>Ветка</th>";
                    string += "    <th rowspan='2'>Вид КЗ</th>";
                    string += "    <th colspan='3'>Максимальное значение тока КЗ, кА</th>";
                    string += "    <th colspan='3'>Минимальное значение тока КЗ, кА</th>";
                    string += "</tr><tr>";
                    string += "    <th><abbr title='Действующее значение периодической составляющей тока КЗ'>I<sub>к.max</sub></abbr></th>";
                    string += "    <th><abbr title='Наибольшее начальное значение апериодической составляющей тока КЗ'>i<sub>a0.max</sub></abbr></th>";
                    string += "    <th><abbr title='Ударный ток КЗ'>i<sub>уд.max</sub></abbr></th>";
                    string += "    <th><abbr title='Действующее значение периодической составляющей тока КЗ'>I<sub>к.min</sub></abbr></th>";
                    string += "    <th><abbr title='Наибольшее начальное значение апериодической составляющей тока КЗ'>i<sub>a0.min</sub></abbr></th>";
                    string += "    <th><abbr title='Ударный ток КЗ'>i<sub>уд.min</sub></abbr></th>";
                    string += "</tr></thead><tbody>";
                    for (let pointKz in calc) {
                        string += "<tr>";
                        string += "    <td rowspan='" + rowspan + "'>Участок " + pointKz + "<br>Точка К" + pointKz + "</td>";
                        string += "    <td rowspan='3'>" + firstElement.name + " - Точка К" + pointKz + "</td>";
                        string += "    <td>К<sup>(3)</sup></td>";
                        string += "    <td>" + customRound(calc[pointKz].ik3max) + "</td>";
                        string += "    <td>" + customRound(calc[pointKz].ia0max) + "</td>";
                        string += "    <td>" + customRound(calc[pointKz].iudmax) + "</td>";
                        string += "    <td>" + customRound(calc[pointKz].ik3min) + "</td>";
                        string += "    <td>" + customRound(calc[pointKz].ia0min) + "</td>";
                        string += "    <td>" + customRound(calc[pointKz].iudmin) + "</td>";
                        string += "</tr><tr>";
                        string += "    <td>К<sup>(2)</sup></td>";
                        string += "    <td>" + customRound(calc[pointKz].ik2max) + "</td>";
                        string += "    <td>-</td>";
                        string += "    <td>-</td>";
                        string += "    <td>" + customRound(calc[pointKz].ik2min) + "</td>";
                        string += "    <td>-</td>";
                        string += "    <td>-</td>";
                        string += "</tr><tr>";
                        string += "    <td>К<sup>(1)</sup></td>";
                        string += "    <td>" + customRound(calc[pointKz].ik1max) + "</td>";
                        string += "    <td>-</td>";
                        string += "    <td>-</td>";
                        string += "    <td>" + customRound(calc[pointKz].ik1min) + "</td>";
                        string += "    <td>-</td>";
                        string += "    <td>-</td>";
                        string += "</tr>";
                        if ((lastElement && lastElement.key == 'complex') || (lastElement && lastElement.key == 'ad') || (lastElement && lastElement.key == 'sd')) {
                            let ik3max = schemaObj.calcInverse[pointKz].ik3max;
                            let ia0max = schemaObj.calcInverse[pointKz].ia0max;
                            let iudmax = schemaObj.calcInverse[pointKz].iudmax;
                            let ik3min = schemaObj.calcInverse[pointKz].ik3min;
                            let ia0min = schemaObj.calcInverse[pointKz].ia0min;
                            let iudmin = schemaObj.calcInverse[pointKz].iudmin;
                            let indexArr = lastElement.name.split(" ");
                            let index = indexArr.map(function (item) {
                                return item[0].toUpperCase();
                            });
                            index = index.join('');
                            let alert = '';
                            if (schemaObj.resistance[lastElement.rowId].current < (10 * calc[pointKz].ik3max)) {
                                alert = '<br><span class="text-danger">I<sub>' + index + '</sub> = ' + customRound(schemaObj.resistance[lastElement.rowId].current, 1) + 'А < ' + customRound(calc[pointKz].ik3max * 10, 1) + 'А (0,01&times;I<sub>к.max</sub>), значит его можно не учитывать!</span>';
                            }
                            string += "<tr>";
                            string += "    <td>Точка К" + pointKz + " - " + lastElement.name + alert + "</td>";
                            string += "    <td>К<sup>(3)</sup></td>";
                            string += "    <td>" + customRound(ik3max) + "</td>";
                            string += "    <td>" + customRound(ia0max) + "</td>";
                            string += "    <td>" + customRound(iudmax) + "</td>";
                            string += "    <td>" + customRound(ik3min) + "</td>";
                            string += "    <td>" + customRound(ia0min) + "</td>";
                            string += "    <td>" + customRound(iudmin) + "</td>";
                            string += "</tr>";
                            if (schemaObj.resistance[lastElement.rowId].current < (10 * calc[pointKz].ik3max)) {
                                ik3max = ia0max = iudmax = ik3min = ia0min = iudmin = 0;
                            }
                            string += "<tr>";
                            string += "    <td><strong>Суммарный:</strong></td>";
                            string += "    <td>К<sup>(3)</sup></td>";
                            string += "    <td><strong>" + customRound(ik3max + calc[pointKz].ik3max) + "</strong></td>";
                            string += "    <td><strong>" + customRound(ia0max + calc[pointKz].ia0max) + "</strong></td>";
                            string += "    <td><strong>" + customRound(iudmax + calc[pointKz].iudmax) + "</strong></td>";
                            string += "    <td><strong>" + customRound(ik3min + calc[pointKz].ik3min) + "</strong></td>";
                            string += "    <td><strong>" + customRound(ia0min + calc[pointKz].ia0min) + "</strong></td>";
                            string += "    <td><strong>" + customRound(iudmin + calc[pointKz].iudmin) + "</strong></td>";
                            string += "</tr>";
                        }
                    }
                    string += "</tbody></table>";
                    result(string);
                }
            }
        }

        function report() {
            let error = [];
            let string = '';
            if (isEmptyObject(schemaObj.elements) !== 0) {
                string += '<div class="row">';
                string += '<h3>Расчет токов КЗ 0,4кВ (ГОСТ 28249-93)</h3><br>';
                string += '<div class="col-md-5">';
                string += reportSchema();
                string += '</div>';
                string += '<div class="col-md-7">';
                string += '<div class="area">R - <i>активное сопротивление прямой последовательности;</i><br>X - <i>индуктивное сопротивление прямой последовательности;</i><br>R<sub>0</sub> - <i>активное сопротивление обратной последовательности;</i><br>X<sub>0</sub> - <i>индуктивное сопротивление обратной последовательности;</i></div>';
                for (rowId in schemaObj.elements) {
                    let title = '';
                    if (schemaObj.elements[rowId].title !== null) {
                        title = schemaObj.elements[rowId].title;
                    } else {
                        title = schemaObj.elements[rowId].name;
                    }
                    if (schemaObj.elements[rowId].key == 'energySystem') {
                        string += reportEnergySystem(rowId);
                    } else if (schemaObj.elements[rowId].key == 'transformator') {
                        string += reportTransformator(rowId, title);
                    } else if (schemaObj.elements[rowId].key == 'kabelVn') {
                        string += reportKabelVn(rowId, title);
                    } else if (schemaObj.elements[rowId].key == 'kabelNn') {
                        string += reportKabelNn(rowId, title);
                    } else if (schemaObj.elements[rowId].key == 'shinoprovod') {
                        string += reportShinoprovod(rowId, title);
                    } else if (schemaObj.elements[rowId].key == 'hookup') { //контакты
                        string += reportHookup(rowId, title);
                    } else if (schemaObj.elements[rowId].key == 'tt') {
                        string += reportTt(rowId, title);
                    } else if (schemaObj.elements[rowId].key == 'avtomat') {
                        string += reportAvtomat(rowId, title);
                    } else if (schemaObj.elements[rowId].key == 'unique') {
                        string += reportUnique(rowId, title);
                    } else if (schemaObj.elements[rowId].key == 'complex') {
                        string += reportComplex(rowId, title);
                    } else if (schemaObj.elements[rowId].key == 'ad') {
                        string += reportAd(rowId, title);
                    } else if (schemaObj.elements[rowId].key == 'sd') {
                        string += reportSd(rowId, title);
                    }
                    if (schemaObj.elements[rowId].key == 'complex' || schemaObj.elements[rowId].key == 'ad' || schemaObj.elements[rowId].key == 'sd') {
                        if (schemaObj.resistanceStatus[rowId] == false) {
                            error.push(rowId);
                        }
                    } else {
                        if (schemaObj.resistance[rowId].r === null || schemaObj.resistance[rowId].x === null || !isFinite(schemaObj.resistance[rowId].r) || !isFinite(schemaObj.resistance[rowId].x) || (schemaObj.resistance[rowId].r == 0 && schemaObj.resistance[rowId].x == 0 && schemaObj.resistance[rowId].r0 == 0 && schemaObj.resistance[rowId].x0 == 0)) {
                            error.push(rowId);
                        }
                    }
                }
                string += reportCalcKz();
                string += '</div>';
                string += '</div>';
                if (isEmptyObject(schemaObj.kzId) === 0) {
                    customModal(textAddPointKz);
                } else {
                    if (error.length > 0) {
                        customModal(textResistanceIsNotDefined, getErrorItems(error));
                    } else {
                        result(string);
                    }
                }
            } else {
                customModal(textAddEl);
            }
        }

        function reportEnergySystem(rowId) {
            let string = '';
            let xcvn = schemaObj.defaultVar.uvn / (Math.sqrt(3) * schemaObj.defaultVar.ikz);
            string += '<div class="area">';
            string += '<h5><strong>Индуктивное сопротивление системы на участке ' + rowId + ':</strong></h5>';
            string += '<div class="table-responsive"><table class="formula-table"><tr><td rowspan="2">X<sub>с.вн</sub> =&nbsp;</td><td style="text-align:center;">U<sub>вн</sub></td><td rowspan="2">&nbsp;=&nbsp;</td><td style="text-align:center;">' + schemaObj.defaultVar.uvn + '</td><td rowspan="2">&nbsp;= ' + customRound(xcvn) + ' мОм;</td></tr><tr><td style="border-top: 1px solid #000;"> &radic;<span style="text-decoration:overline;">3</span>&times;I<sub>к.вн</sub><sup>(3)</sup></td><td style="border-top: 1px solid #000;"> &radic;<span style="text-decoration:overline;">3</span>&times;' + schemaObj.defaultVar.ikz + '</td></tr></table></div>';
            string += 'I<sub>к.вн</sub><sup>(3)</sup> - <i>действующее значение периодической составляющей тока при трехфазном КЗ у выводов обмотки высшего напряжения трансформатора, кА</i><br><br>';
            string += '<i>Индуктивное сопротивление системы приведенное к низкой стороне:</i><br>';
            string += '<div class="table-responsive"><table class="formula-table"><tr><td rowspan="2">X<sub>с</sub> = 10<sup>3</sup>&times;X<sub>с.вн</sub>&times;</td><td style="text-align:center;">U<sub>нн</sub><sup>2</sup></td><td rowspan="2">&nbsp;= 1000&times;' + customRound(xcvn) + '&times;</td><td style="text-align:center;">' + schemaObj.defaultVar.unn + '<sup>2</sup></td><td rowspan="2">&nbsp;= ' + customRound(1000 * customRound(xcvn) * Math.pow((schemaObj.defaultVar.unn / schemaObj.defaultVar.uvn), 2)) + ' мОм.</td></tr><tr><td style="border-top: 1px solid #000;"> U<sub>вн</sub><sup>2</sup></td><td style="border-top: 1px solid #000;">' + schemaObj.defaultVar.uvn + '<sup>2</sup></td></tr></table></div>';
            string += '</div>';
            return string;
        }

        function reportTransformator(rowId, title) {
            let string = '';
            string += '<div class="area">';
            string += '<h5><strong>' + title + ' на участке ' + rowId + ':</strong></h5>';
            string += 'R<sub>т</sub> = ' + schemaObj.resistance[rowId].r + ' мОм;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
            string += 'X<sub>т</sub> = ' + schemaObj.resistance[rowId].x + ' мОм;<br>';
            string += 'R<sub>0т</sub> = ' + schemaObj.resistance[rowId].r0 + ' мОм;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
            string += 'X<sub>0т</sub> = ' + schemaObj.resistance[rowId].x0 + ' мОм.<br>';
            string += '</div>';
            return string;
        }

        function reportKabelVn(rowId, title) {
            let string = '';
            try {
                let kabVnVal = schemaObj.templates[rowId][0].valueItem;
                let kabVnLength = schemaObj.templates[rowId][1].valueItem;
                let kabVnQuantity = schemaObj.templates[rowId][2].valueItem;
                let kabVn = kabVnVal.split('|');
                string += '<div class="area">';
                string += '<h5><strong>' + title + ' на участке ' + rowId + ':</strong></h5>';
                string += '<div class="table-responsive"><table class="formula-table"><tr><td rowspan="2">R<sub>кб.вн</sub> =&nbsp;</td><td style="text-align:center;">R<sub>кб</sub>&times;l</td><td rowspan="2">&nbsp;=&nbsp;</td><td style="text-align:center;">' + kabVn[0] + '&times;' + kabVnLength + '</td><td rowspan="2">&nbsp;= ' + customRound(kabVn[0] * kabVnLength / kabVnQuantity) + ' мОм;</td></tr><tr><td style="border-top: 1px solid #000;text-align:center;">n</td><td style="border-top: 1px solid #000;text-align:center;">' + kabVnQuantity + '</td></tr></table></div>';
                string += '<div class="table-responsive"><table class="formula-table"><tr><td rowspan="2">X<sub>кб.вн</sub> =&nbsp;</td><td style="text-align:center;">X<sub>кб</sub>&times;l</td><td rowspan="2">&nbsp;=&nbsp;</td><td style="text-align:center;">' + kabVn[1] + '&times;' + kabVnLength + '</td><td rowspan="2">&nbsp;= ' + customRound(kabVn[1] * kabVnLength / kabVnQuantity) + ' мОм;</td></tr><tr><td style="border-top: 1px solid #000;text-align:center;">n</td><td style="border-top: 1px solid #000;text-align:center;">' + kabVnQuantity + '</td></tr></table></div>';
                string += '<div class="table-responsive"><table class="formula-table"><tr><td rowspan="2">R<sub>0кб.вн</sub> =&nbsp;</td><td style="text-align:center;">R<sub>0кб</sub>&times;l</td><td rowspan="2">&nbsp;=&nbsp;</td><td style="text-align:center;">' + kabVn[2] + '&times;' + kabVnLength + '</td><td rowspan="2">&nbsp;= ' + customRound(kabVn[2] * kabVnLength / kabVnQuantity) + ' мОм;</td></tr><tr><td style="border-top: 1px solid #000;text-align:center;">n</td><td style="border-top: 1px solid #000;text-align:center;">' + kabVnQuantity + '</td></tr></table></div>';
                string += '<div class="table-responsive"><table class="formula-table"><tr><td rowspan="2">X<sub>0кб.вн</sub> =&nbsp;</td><td style="text-align:center;">X<sub>0кб</sub>&times;l</td><td rowspan="2">&nbsp;=&nbsp;</td><td style="text-align:center;">' + kabVn[3] + '&times;' + kabVnLength + '</td><td rowspan="2">&nbsp;= ' + customRound(kabVn[3] * kabVnLength / kabVnQuantity) + ' мОм;</td></tr><tr><td style="border-top: 1px solid #000;text-align:center;">n</td><td style="border-top: 1px solid #000;text-align:center;">' + kabVnQuantity + '</td></tr></table></div>';
                string += 'l - <i>длина кабеля, м</i>;<br>';
                string += 'n - <i>количество параллельных ниток кабелей, шт</i>;<br>';
                string += '<i>Сопротивления приведенные к низкой стороне:</i><br>';
                string += '<div class="table-responsive"><table class="formula-table"><tr><td rowspan="2">R<sub>кб</sub> = R<sub>кб.вн</sub>&times;</td><td style="text-align:center;">U<sub>нн</sub><sup>2</sup></td><td rowspan="2">&nbsp;= ' + customRound(kabVn[0] * kabVnLength / kabVnQuantity) + '&times;</td><td style="text-align:center;">' + schemaObj.defaultVar.unn + '<sup>2</sup></td><td rowspan="2">&nbsp;= ' + customRound(kabVn[0] * kabVnLength / kabVnQuantity * Math.pow((schemaObj.defaultVar.unn / schemaObj.defaultVar.uvn), 2)) + ' мОм;</td></tr><tr><td style="border-top: 1px solid #000;"> U<sub>вн</sub><sup>2</sup></td><td style="border-top: 1px solid #000;">' + schemaObj.defaultVar.uvn + '<sup>2</sup></td></tr></table></div>';
                string += '<div class="table-responsive"><table class="formula-table"><tr><td rowspan="2">X<sub>кб</sub> = X<sub>кб.вн</sub>&times;</td><td style="text-align:center;">U<sub>нн</sub><sup>2</sup></td><td rowspan="2">&nbsp;= ' + customRound(kabVn[1] * kabVnLength / kabVnQuantity) + '&times;</td><td style="text-align:center;">' + schemaObj.defaultVar.unn + '<sup>2</sup></td><td rowspan="2">&nbsp;= ' + customRound(kabVn[1] * kabVnLength / kabVnQuantity * Math.pow((schemaObj.defaultVar.unn / schemaObj.defaultVar.uvn), 2)) + ' мОм;</td></tr><tr><td style="border-top: 1px solid #000;"> U<sub>вн</sub><sup>2</sup></td><td style="border-top: 1px solid #000;">' + schemaObj.defaultVar.uvn + '<sup>2</sup></td></tr></table></div>';
                string += '<div class="table-responsive"><table class="formula-table"><tr><td rowspan="2">R<sub>0кб</sub> = R<sub>0кб.вн</sub>&times;</td><td style="text-align:center;">U<sub>нн</sub><sup>2</sup></td><td rowspan="2">&nbsp;= ' + customRound(kabVn[2] * kabVnLength / kabVnQuantity) + '&times;</td><td style="text-align:center;">' + schemaObj.defaultVar.unn + '<sup>2</sup></td><td rowspan="2">&nbsp;= ' + customRound(kabVn[2] * kabVnLength / kabVnQuantity * Math.pow((schemaObj.defaultVar.unn / schemaObj.defaultVar.uvn), 2)) + ' мОм;</td></tr><tr><td style="border-top: 1px solid #000;"> U<sub>вн</sub><sup>2</sup></td><td style="border-top: 1px solid #000;">' + schemaObj.defaultVar.uvn + '<sup>2</sup></td></tr></table></div>';
                string += '<div class="table-responsive"><table class="formula-table"><tr><td rowspan="2">X<sub>0кб</sub> = X<sub>0кб.вн</sub>&times;</td><td style="text-align:center;">U<sub>нн</sub><sup>2</sup></td><td rowspan="2">&nbsp;= ' + customRound(kabVn[3] * kabVnLength / kabVnQuantity) + '&times;</td><td style="text-align:center;">' + schemaObj.defaultVar.unn + '<sup>2</sup></td><td rowspan="2">&nbsp;= ' + customRound(kabVn[3] * kabVnLength / kabVnQuantity * Math.pow((schemaObj.defaultVar.unn / schemaObj.defaultVar.uvn), 2)) + ' мОм.</td></tr><tr><td style="border-top: 1px solid #000;"> U<sub>вн</sub><sup>2</sup></td><td style="border-top: 1px solid #000;">' + schemaObj.defaultVar.uvn + '<sup>2</sup></td></tr></table></div>';
                string += '</div>';
                return string;
            } catch (err) {
            }
        }

        function reportKabelNn(rowId, title) {
            let string = '';
            try {
                let kabNnVal = schemaObj.templates[rowId][0].valueItem;
                let kabNnLength = schemaObj.templates[rowId][1].valueItem;
                let kabNnQuantity = schemaObj.templates[rowId][2].valueItem;
                let kabNn = kabNnVal.split('|');
                string += '<div class="area">';
                string += '<h5><strong>' + title + ' на участке ' + rowId + ':</strong></h5>';

                string += '<div class="table-responsive"><table class="formula-table"><tr><td rowspan="2">R<sub>кб</sub> =&nbsp;</td><td style="text-align:center;">R<sub>кб</sub>&times;l</td><td rowspan="2">&nbsp;=&nbsp;</td><td style="text-align:center;">' + kabNn[0] + '&times;' + kabNnLength + '</td><td rowspan="2">&nbsp;= ' + customRound(kabNn[0] * kabNnLength / kabNnQuantity) + ' мОм;</td></tr><tr><td style="border-top: 1px solid #000;text-align:center;">n</td><td style="border-top: 1px solid #000;text-align:center;">' + kabNnQuantity + '</td></tr></table></div>';
                string += '<div class="table-responsive"><table class="formula-table"><tr><td rowspan="2">X<sub>кб</sub> =&nbsp;</td><td style="text-align:center;">X<sub>кб</sub>&times;l</td><td rowspan="2">&nbsp;=&nbsp;</td><td style="text-align:center;">' + kabNn[1] + '&times;' + kabNnLength + '</td><td rowspan="2">&nbsp;= ' + customRound(kabNn[1] * kabNnLength / kabNnQuantity) + ' мОм;</td></tr><tr><td style="border-top: 1px solid #000;text-align:center;">n</td><td style="border-top: 1px solid #000;text-align:center;">' + kabNnQuantity + '</td></tr></table></div>';
                string += '<div class="table-responsive"><table class="formula-table"><tr><td rowspan="2">R<sub>0кб</sub> =&nbsp;</td><td style="text-align:center;">R<sub>0кб</sub>&times;l</td><td rowspan="2">&nbsp;=&nbsp;</td><td style="text-align:center;">' + kabNn[2] + '&times;' + kabNnLength + '</td><td rowspan="2">&nbsp;= ' + customRound(kabNn[2] * kabNnLength / kabNnQuantity) + ' мОм;</td></tr><tr><td style="border-top: 1px solid #000;text-align:center;">n</td><td style="border-top: 1px solid #000;text-align:center;">' + kabNnQuantity + '</td></tr></table></div>';
                string += '<div class="table-responsive"><table class="formula-table"><tr><td rowspan="2">X<sub>0кб</sub> =&nbsp;</td><td style="text-align:center;">X<sub>0кб</sub>&times;l</td><td rowspan="2">&nbsp;=&nbsp;</td><td style="text-align:center;">' + kabNn[3] + '&times;' + kabNnLength + '</td><td rowspan="2">&nbsp;= ' + customRound(kabNn[3] * kabNnLength / kabNnQuantity) + ' мОм;</td></tr><tr><td style="border-top: 1px solid #000;text-align:center;">n</td><td style="border-top: 1px solid #000;text-align:center;">' + kabNnQuantity + '</td></tr></table></div>';
                string += 'l - <i>длина кабеля, м</i>;<br>';
                string += 'n - <i>количество параллельных ниток кабелей, шт</i>.';
                string += '</div>';
                return string;
            } catch (err) {
            }
        }

        function reportShinoprovod(rowId, title) {
            let string = '';
            try {
                let shnpVal = schemaObj.templates[rowId][0].valueItem;
                let shnpLength = schemaObj.templates[rowId][1].valueItem;
                let shnp = shnpVal.split('|');
                string += '<div class="area">';
                string += '<h5><strong>' + title + ' на участке ' + rowId + ':</strong></h5>';
                string += 'R<sub>ш</sub> = R<sub>ш</sub>&times;l = ' + shnp[0] + '&times;' + shnpLength + ' = ' + customRound(shnp[0] * shnpLength) + ' мОм;<br>';
                string += 'X<sub>ш</sub> = X<sub>ш</sub>&times;l = ' + shnp[1] + '&times;' + shnpLength + ' = ' + customRound(shnp[1] * shnpLength) + ' мОм;<br>';
                string += 'R<sub>0ш</sub> = (R<sub>ш</sub>+3&times;R<sub>нп</sub>)&times;l =  (' + shnp[0] + '+3&times;' + shnp[2] + ')&times;' + shnpLength + ' = ' + customRound(+(shnp[0] * shnpLength) + (3 * shnp[2] * shnpLength)) + ' мОм;<br>';
                string += 'X<sub>0ш</sub> = (X<sub>ш</sub>+3&times;X<sub>нп</sub>)&times;l =  (' + shnp[1] + '+3&times;' + shnp[3] + ')&times;' + shnpLength + ' = ' + customRound(+(shnp[1] * shnpLength) + (3 * shnp[3] * shnpLength)) + ' мОм;<br>';
                string += 'l - <i>длина шинопровода, м</i>;<br>';
                string += 'R<sub>нп</sub>, X<sub>нп</sub> - <i>сопротивления нулевого проводника, мОм</i>.';
                string += '</div>';
                return string;
            } catch (err) {
            }
        }

        function reportHookup(rowId, title) { //контакты
            let string = '';
            try {
                let hookup = schemaObj.templates[rowId][0].valueItem;
                let hookupQuantity = schemaObj.templates[rowId][1].valueItem;
                let hookupValue = hookup.split('|');
                string += '<div class="area">';
                string += '<h5><strong>' + title + ' на участке ' + rowId + ':</strong></h5>';
                string += 'R<sub>к</sub> = R<sub>к</sub>&times;n = ' + hookupValue[0] + '&times;' + hookupQuantity + ' = ' + customRound(hookupValue[0] * hookupQuantity) + ' мОм;<br>';
                string += 'R<sub>0к</sub> = R<sub>0к</sub>&times;n = ' + hookupValue[2] + '&times;' + hookupQuantity + ' = ' + customRound(hookupValue[2] * hookupQuantity) + ' мОм;<br>';
                string += 'n - <i>количество, шт</i>.';
                string += '</div>';
                return string;
            } catch (err) {
            }
        }

        function reportTt(rowId, title) {
            let string = '';
            try {
                let tt = schemaObj.templates[rowId][0].valueItem;
                let ttQuantity = schemaObj.templates[rowId][1].valueItem;
                let ttValue = tt.split('|');
                string += '<div class="area">';
                string += '<h5><strong>' + title + ' на участке ' + rowId + ':</strong></h5>';
                string += 'R<sub>TA</sub> = R<sub>TA</sub>&times;n = ' + ttValue[0] + '&times;' + ttQuantity + ' = ' + customRound(ttValue[0] * ttQuantity) + ' мОм;<br>';
                string += 'X<sub>TA</sub> = X<sub>TA</sub>&times;n = ' + ttValue[1] + '&times;' + ttQuantity + ' = ' + customRound(ttValue[1] * ttQuantity) + ' мОм;<br>';
                string += 'R<sub>0TA</sub> = R<sub>0TA</sub>&times;n = ' + ttValue[2] + '&times;' + ttQuantity + ' = ' + customRound(ttValue[2] * ttQuantity) + ' мОм;<br>';
                string += 'X<sub>0TA</sub> = X<sub>0TA</sub>&times;n = ' + ttValue[3] + '&times;' + ttQuantity + ' = ' + customRound(ttValue[3] * ttQuantity) + ' мОм;<br>';
                string += 'n - <i>количество, шт</i>.';
                string += '</div>';
                return string;
            } catch (err) {
            }
        }

        function reportAvtomat(rowId, title) {
            let string = '';
            try {
                let avtomat = schemaObj.templates[rowId][0].valueItem;
                let avtomatQuantity = schemaObj.templates[rowId][1].valueItem;
                let avtomatValue = avtomat.split('|');
                string += '<div class="area">';
                string += '<h5><strong>' + title + ' на участке ' + rowId + ':</strong></h5>';
                string += 'R<sub>кв</sub> = R<sub>кв</sub>&times;n = ' + avtomatValue[0] + '&times;' + avtomatQuantity + ' = ' + customRound(avtomatValue[0] * avtomatQuantity) + ' мОм;<br>';
                string += 'X<sub>кв</sub> = X<sub>кв</sub>&times;n = ' + avtomatValue[1] + '&times;' + avtomatQuantity + ' = ' + customRound(avtomatValue[1] * avtomatQuantity) + ' мОм;<br>';
                string += 'R<sub>0кв</sub> = R<sub>0кв</sub>&times;n = ' + avtomatValue[2] + '&times;' + avtomatQuantity + ' = ' + customRound(avtomatValue[2] * avtomatQuantity) + ' мОм;<br>';
                string += 'X<sub>0кв</sub> = X<sub>0кв</sub>&times;n = ' + avtomatValue[3] + '&times;' + avtomatQuantity + ' = ' + customRound(avtomatValue[3] * avtomatQuantity) + ' мОм;<br>';
                string += 'n - <i>количество, шт</i>.';
                string += '</div>';
                return string;
            } catch (err) {
            }
        }

        function reportUnique(rowId, title) {
            let string = '';
            string += '<div class="area">';
            string += '<h5><strong>' + title + ' на участке ' + rowId + ':</strong></h5>';
            string += 'R = ' + schemaObj.templates[rowId][0].valueItem + ' мОм;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
            string += 'X = ' + schemaObj.templates[rowId][1].valueItem + ' мОм;<br>';
            string += 'R<sub>0</sub> = ' + schemaObj.templates[rowId][2].valueItem + ' мОм;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
            string += 'X<sub>0</sub> = ' + schemaObj.templates[rowId][3].valueItem + ' мОм.<br>';
            string += '</div>';
            return string;
        }

        function reportComplex(rowId, title) {
            let string = '';
            let complexIndex = {'AD': 'АД', 'LN': 'ЛН', 'P': 'П', 'EU': 'ЭУ', 'LG': 'ЛГ',};
            let template = schemaObj.templates[rowId];
            string += '<div class="area">';
            string += '<h5><strong>' + title + ' на участке ' + rowId + ':</strong></h5>';
            let indexArr = schemaObj.elements[rowId].name.split(" ");
            let index = indexArr.map(function (item) {
                return item[0].toUpperCase();
            });
            index = index.join('');
            let str1 = '', str2 = '', str3 = '';
            for (let i = 2; i < template.length; i++) {
                let type = template[i].idItem.split('_');
                str1 += 'P<sub>' + complexIndex[type[0]] + '</sub> = ' + template[i].valueItem + ' кВт;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
                str2 += 'P<sub>&lowast;' + complexIndex[type[0]] + '</sub> = P<sub>' + complexIndex[type[0]] + '</sub>/P<sub>&sum;' + index + '</sub> = ' + template[i].valueItem + '/' + schemaObj.resistance[rowId].powerSum + ' = ' + customRound(template[i].valueItem / schemaObj.resistance[rowId].powerSum) + ';<br>';
            }
            string += str1 + '<br>';
            string += str2;
            string += 'Параметры комплексной нагрузки в относительных единицах определяем по <a href="#chart">кривым</a>.<br>';
            string += 'Эквивалентная сверхпереходная ЭДС:<br>';
            string += 'E&Prime;<sub>&lowast;НГ</sub> = ' + customRound(schemaObj.resistance[rowId].EngRel) + '<br>';
            string += 'Сопротивление прямой последовательности комплексной нагрузки:<br>';
            string += 'Z<sub>&lowast;1НГ</sub> = ' + customRound(schemaObj.resistance[rowId].Z1ngRel) + '<br>';
            string += 'Сопротивление обратной последовательности комплексной нагрузки:<br>';
            string += 'Z<sub>&lowast;2НГ</sub> = ' + customRound(schemaObj.resistance[rowId].Z2ngRel) + '<br>';
            string += 'Сопротивление нулевой последовательности комплексной нагрузки:<br>';
            string += 'Z<sub>&lowast;0НГ</sub> = ' + customRound(schemaObj.resistance[rowId].Z0ngRel) + '<br>';
            string += 'Ток комплексной нагрузки:<br>';
            string += '<div class="table-responsive"><table class="formula-table"><tr><td rowspan="2">I<sub>' + index + '</sub> =&nbsp;</td><td style="text-align:center;">P<sub>&sum;' + index + '</sub></td><td rowspan="2">&nbsp;=&nbsp;</td><td style="text-align:center;">' + schemaObj.resistance[rowId].powerSum + '</td><td rowspan="2">&nbsp;= ' + customRound(schemaObj.resistance[rowId].current, 1) + ' А.</td></tr><tr><td style="border-top: 1px solid #000;"> &radic;<span style="text-decoration:overline;">3</span>&times;U<sub>нн</sub> &times;cos&phi;</td><td style="border-top: 1px solid #000;"> &radic;<span style="text-decoration:overline;">3</span>&times;0.4&times;' + schemaObj.resistance[rowId].cosF + '</td></tr></table></div>';
            string += 'Базисное сопротивление:<br>';
            string += '<div class="table-responsive"><table class="formula-table"><tr><td rowspan="2">Z<sub>б</sub> =&nbsp;</td><td style="text-align:center;">U<sub>б</sub></td><td rowspan="2">&nbsp;=&nbsp;</td><td style="text-align:center;">380&times;10<sup>3</sup></td><td rowspan="2">&nbsp;= ' + customRound(schemaObj.resistance[rowId].bazis, 1) + ' мОм.</td></tr><tr><td style="border-top: 1px solid #000;"> &radic;<span style="text-decoration:overline;">3</span>&times;I<sub>' + index + '</sub></td><td style="border-top: 1px solid #000;"> &radic;<span style="text-decoration:overline;">3</span>&times;' + customRound(schemaObj.resistance[rowId].current, 1) + '</td></tr></table></div>';
            string += 'Параметры комплексной нагрузки в именованых единицах:<br>';
            string += 'E&Prime;<sub>НГ</sub> = E&Prime;<sub>&lowast;НГ</sub>&times;U<sub>б</sub> = ' + customRound(schemaObj.resistance[rowId].EngRel) + '&times;380 = ' + customRound(schemaObj.resistance[rowId].Eng, 1) + ' В;<br>';
            string += 'Z<sub>1нг</sub> = Z<sub>&lowast;1НГ</sub>&times;Z<sub>б</sub> = ' + customRound(schemaObj.resistance[rowId].Z1ngRel) + '&times;' + customRound(schemaObj.resistance[rowId].bazis, 1) + ' = ' + customRound(schemaObj.resistance[rowId].Z1ng, 1) + ' мОм;<br>';
            string += 'Z<sub>2нг</sub> = Z<sub>&lowast;2НГ</sub>&times;Z<sub>б</sub> = ' + customRound(schemaObj.resistance[rowId].Z2ngRel) + '&times;' + customRound(schemaObj.resistance[rowId].bazis, 1) + ' = ' + customRound(schemaObj.resistance[rowId].Z2ng, 1) + ' мОм;<br>';
            string += 'Z<sub>0нг</sub> = Z<sub>&lowast;0НГ</sub>&times;Z<sub>б</sub> = ' + customRound(schemaObj.resistance[rowId].Z0ngRel) + '&times;' + customRound(schemaObj.resistance[rowId].bazis, 1) + ' = ' + customRound(schemaObj.resistance[rowId].Z0ng, 1) + ' мОм.<br>';
            string += '</div>';
            return string;
        }

        function reportAd(rowId, title) {
            let indexArr = schemaObj.elements[rowId].name.split(" ");
            let index = indexArr.map(function (item) {
                return item[0].toUpperCase();
            });
            index = index.join('');
            let string = '';
            string += '<div class="area">';
            string += '<h5><strong>' + title + ' на участке ' + rowId + ':</strong></h5>';
            string += 'Механические потери в электродвигателе:<br>';
            string += 'P<sub>мх</sub> = 0.02&times;P<sub>ном</sub> = 0.02&times;' + schemaObj.templates[rowId][0].valueItem + ' = ' + customRound(schemaObj.resistance[rowId].pmh) + ' кВт.<br>';
            string += 'Активное сопротивление ротора, приведенное к статору:<br>';
            string += '<div class="table-responsive"><table class="formula-table"><tr><td rowspan="2">R<sub>2</sub> =&nbsp;</td><td style="text-align:center;">0.36&times;M<sub>п</sub>&times;(P<sub>ном</sub>+P<sub>мх</sub>)</td><td rowspan="2">&nbsp;=&nbsp;</td><td style="text-align:center;">0.36&times;' + schemaObj.templates[rowId][5].valueItem + '&times;(' + schemaObj.templates[rowId][0].valueItem + '+' + customRound(schemaObj.resistance[rowId].pmh) + ')&times;10<sup>6</sup></td><td rowspan="2">&nbsp;= ' + customRound(schemaObj.resistance[rowId].r2) + ' мОм.</td></tr><tr><td style="border-top: 1px solid #000;text-align:center;">I<sub>п</sub><sup>2</sup>&times;I<sub>ном</sub><sup>2</sup>&times;(1-S<sub>ном</sub>)</td><td style="border-top: 1px solid #000;text-align:center;">' + schemaObj.templates[rowId][4].valueItem + '<sup>2</sup>&times;' + customRound(schemaObj.resistance[rowId].current, 1) + '<sup>2</sup>&times;(1-' + customRound(schemaObj.templates[rowId][3].valueItem / 100) + ')</td></tr></table></div>';
            string += 'Активное сопротивление статора:<br>';
            string += '<div class="table-responsive"><table class="formula-table"><tr><td rowspan="2">R<sub>1</sub> =&nbsp;</td><td style="text-align:center;">S<sub>ном</sub>&times;U<sub>ном</sub><sup>2</sup>&times;cos&phi;<sub>ном</sub></td><td rowspan="2">&nbsp;=&nbsp;</td><td style="text-align:center;">' + customRound(schemaObj.templates[rowId][3].valueItem / 100) + '&times;0.38<sup>2</sup>&times;' + schemaObj.templates[rowId][1].valueItem + '&times;10<sup>6</sup></td><td rowspan="2">&nbsp;= ' + customRound(schemaObj.resistance[rowId].r1) + ' мОм.</td></tr><tr><td style="border-top: 1px solid #000;text-align:center;">P<sub>ном</sub></td><td style="border-top: 1px solid #000;text-align:center;">' + schemaObj.templates[rowId][0].valueItem + '</td></tr></table></div>';
            string += 'Суммарное активное сопротивление в начальный момент КЗ:<br>';
            string += 'R<sub>ад</sub> = R<sub>1</sub>+0.96&times;R<sub>2</sub> = ' + customRound(schemaObj.resistance[rowId].r1) + '+0.96&times;' + customRound(schemaObj.resistance[rowId].r2) + ' = ' + customRound(schemaObj.resistance[rowId].rad) + ' мОм.<br>';
            string += 'Полное сопротивление в начальный момент КЗ:<br>';
            string += '<div class="table-responsive"><table class="formula-table"><tr><td rowspan="2">Z<sub>ад</sub> =&nbsp;</td><td style="text-align:center;">U<sub>ном</sub></td><td rowspan="2">&nbsp;=&nbsp;</td><td style="text-align:center;">0,38&times;10<sup>6</sup></td><td rowspan="2">&nbsp;= ' + customRound(schemaObj.resistance[rowId].zad) + ' мОм.</td></tr><tr><td style="border-top: 1px solid #000;"> &radic;<span style="text-decoration:overline;">3</span>&times;I<sub>п</sub>&times;I<sub>ном</sub></td><td style="border-top: 1px solid #000;"> &radic;<span style="text-decoration:overline;">3</span>&times;' + schemaObj.templates[rowId][4].valueItem + '&times;' + customRound(schemaObj.resistance[rowId].current, 1) + '</td></tr></table></div>';
            string += 'Сверхпереходное сопротивление асинхронного дигателя:<br>';
            string += 'X&Prime;<sub>ад</sub> = &radic;<div style="border-top:1px solid #000;display:inline-block;margin-top:2px;">Z<sub>ад</sub><sup>2</sup>-R<sub>ад</sub><sup>2</sup></div> = &radic;<div style="border-top:1px solid #000;display:inline-block;margin-top:2px;">' + customRound(schemaObj.resistance[rowId].zad) + '<sup>2</sup>-' + customRound(schemaObj.resistance[rowId].rad) + '<sup>2</sup></div> = ' + customRound(schemaObj.resistance[rowId].xad) + ' мОм.<br>';
            string += 'Сверхпереходная ЭДС асинхронного дигателя:<br>';
            string += 'E&Prime;<sub>ф.ад</sub> = &radic;<div style="border-top:1px solid #000;display:inline-block;margin-top:2px;">(U<sub>ф</sub>&times;cos&phi;-I<sub>ном</sub>&times;R<sub>ад</sub>)<sup>2</sup>+(U<sub>ф</sub>&times;sin&phi;-I<sub>ном</sub>&times;X&Prime;<sub>ад</sub>)<sup>2</sup></div>;<br><br>';
            string += 'E&Prime;<sub>ф.ад</sub> = &radic;<div style="border-top:1px solid #000;display:inline-block;margin-top:2px;">(220&times;' + schemaObj.templates[rowId][1].valueItem + '-' + customRound(schemaObj.resistance[rowId].current, 1) + '&times;' + customRound(schemaObj.resistance[rowId].rad / 1000, 4) + ')<sup>2</sup>+(220&times;' + customRound(schemaObj.resistance[rowId].sinF) + '-' + customRound(schemaObj.resistance[rowId].current, 1) + '&times;' + customRound(schemaObj.resistance[rowId].xad / 1000, 4) + ')<sup>2</sup></div> = ' + customRound(schemaObj.resistance[rowId].ead, 1) + ' В.<br>';
            string += '</div>';
            return string;
        }

        function reportSd(rowId, title) {
            let indexArr = schemaObj.elements[rowId].name.split(" ");
            let index = indexArr.map(function (item) {
                return item[0].toUpperCase();
            });
            index = index.join('');
            let string = '';
            string += '<div class="area">';
            string += '<h5><strong>' + title + ' на участке ' + rowId + ':</strong></h5>';
            string += 'Полное сопротивление в начальный момент КЗ:<br>';
            string += '<div class="table-responsive"><table class="formula-table"><tr><td rowspan="2">Z<sub>сд</sub> =&nbsp;</td><td style="text-align:center;">U<sub>ном</sub></td><td rowspan="2">&nbsp;=&nbsp;</td><td style="text-align:center;">0,38&times;10<sup>6</sup></td><td rowspan="2">&nbsp;= ' + customRound(schemaObj.resistance[rowId].zsd) + ' мОм.</td></tr><tr><td style="border-top: 1px solid #000;"> &radic;<span style="text-decoration:overline;">3</span>&times;I<sub>ном</sub></td><td style="border-top: 1px solid #000;"> &radic;<span style="text-decoration:overline;">3</span>&times;' + customRound(schemaObj.resistance[rowId].current, 1) + '</td></tr></table></div>';
            string += 'Сверхпереходное сопротивление синхронного дигателя:<br>';
            string += 'X&Prime;<sub>d</sub> = 0.15&times;Z<sub>сд</sub> = 0.15&times;' + customRound(schemaObj.resistance[rowId].zsd) + ' = ' + customRound(schemaObj.resistance[rowId].xsd) + ' мОм.<br>';
            string += 'Aктивное сопротивление:<br>';
            string += 'R<sub>сд</sub> = 0.15&times;X&Prime;<sub>d</sub> = 0.15&times;' + customRound(schemaObj.resistance[rowId].xsd) + ' = ' + customRound(schemaObj.resistance[rowId].rsd) + ' мОм.<br>';
            string += 'Сверхпереходная ЭДС синхронного дигателя:<br>';
            string += 'E&Prime;<sub>ф.сд</sub> = &radic;<div style="border-top:1px solid #000;display:inline-block;margin-top:2px;">(U<sub>ф</sub>-I<sub>ном</sub>&times;X&Prime;<sub>d</sub>&times;sin&phi;)<sup>2</sup>+(I<sub>ном</sub>&times;X&Prime;<sub>d</sub>&times;cos&phi;)<sup>2</sup></div>;<br><br>';
            string += 'E&Prime;<sub>ф.сд</sub> = &radic;<div style="border-top:1px solid #000;display:inline-block;margin-top:2px;">(220-' + customRound(schemaObj.resistance[rowId].current, 1) + '&times;' + customRound(schemaObj.resistance[rowId].xsd / 1000, 4) + '&times;' + customRound(schemaObj.resistance[rowId].sinF) + ')<sup>2</sup>+(' + customRound(schemaObj.resistance[rowId].current, 1) + '&times;' + customRound(schemaObj.resistance[rowId].xsd / 1000, 4) + '&times;' + schemaObj.templates[rowId][1].valueItem + ')<sup>2</sup></div> = ' + customRound(schemaObj.resistance[rowId].esd, 1) + ' В.<br>';
            string += '</div>';
            return string;
        }

        function reportCalcKz() {
            let string = '';
            let lastElement = lastElementObj(schemaObj.elements);
            let firstElement = firstElementObj(schemaObj.elements);
            for (let kzIdkey in schemaObj.kzId) {
                string += '<div class="area">';
                string += '<div class="area-result"><h3>Расчет КЗ на участке ' + kzIdkey + '</h3>';
                string += '<h4>' + firstElement.name + ' - Точка К' + kzIdkey + ':</h4>';
                string += '<h5><i>Суммарное сопротивление цепи</i>:</h5>';
                let formulaR = '', formulaX = '', formulaR0 = '', formulaX0 = '', valuesR = '', valuesX = '',
                    valuesR0 = '', valuesX0 = '';
                let i = 0, R = 0, X = 0, R0 = 0, X0 = 0;
                let pls = '+';
                for (let rowId in schemaObj.resistance) {
                    if (schemaObj.resistance[rowId].r !== 0) {
                        formulaR += 'R<sub>' + symbol[schemaObj.elements[rowId].key] + '</sub>' + pls;
                        valuesR += customRound(schemaObj.resistance[rowId].r) + pls;
                        R += schemaObj.resistance[rowId].r;
                    }
                    if (schemaObj.resistance[rowId].x !== 0) {
                        formulaX += 'X<sub>' + symbol[schemaObj.elements[rowId].key] + '</sub>' + pls;
                        valuesX += customRound(schemaObj.resistance[rowId].x) + pls;
                        X += schemaObj.resistance[rowId].x;
                    }
                    if (schemaObj.resistance[rowId].r0 !== 0) {
                        formulaR0 += 'R<sub>0' + symbol[schemaObj.elements[rowId].key] + '</sub>' + pls;
                        valuesR0 += customRound(schemaObj.resistance[rowId].r0) + pls;
                        R0 += schemaObj.resistance[rowId].r0;
                    }
                    if (schemaObj.resistance[rowId].x0 !== 0) {
                        formulaX0 += 'X<sub>0' + symbol[schemaObj.elements[rowId].key] + '</sub>' + pls;
                        valuesX0 += customRound(schemaObj.resistance[rowId].x0) + pls;
                        X0 += schemaObj.resistance[rowId].x0;
                    }
                    if (kzIdkey == rowId) break;
                    ++i;
                }
                string += 'R<sub>&sum;</sub> = ' + formulaR.replace(/\+$/g, '') + ' = ' + valuesR.replace(/\+$/g, '') + ' = ' + customRound(R) + ' мОм;<br>';
                string += 'X<sub>&sum;</sub> = ' + formulaX.replace(/\+$/g, '') + ' = ' + valuesX.replace(/\+$/g, '') + ' = ' + customRound(X) + ' мОм;<br>';
                string += 'R<sub>0&sum;</sub> = ' + formulaR0.replace(/\+$/g, '') + ' = ' + valuesR0.replace(/\+$/g, '') + ' = ' + customRound(R0) + ' мОм;<br>';
                string += 'X<sub>0&sum;</sub> = ' + formulaX0.replace(/\+$/g, '') + ' = ' + valuesX0.replace(/\+$/g, '') + ' = ' + customRound(X0) + ' мОм;<br>';
                let arcResistance = schemaObj.defaultVar.arcResistance * 1;
                let rSumAccent = customRound(R) + arcResistance;
                string += 'R<sub>&sum;</sub>&prime; = R<sub>&sum;</sub>+R<sub>д</sub>  = ' + customRound(R) + '+' + arcResistance + ' = ' + customRound(rSumAccent) + ' мОм.<br>';
                let ik3max = customRound((schemaObj.defaultVar.unn * 1000) / (Math.sqrt(3) * Math.sqrt(Math.pow(X, 2) + Math.pow(R, 2))));
                let ik3min = customRound((schemaObj.defaultVar.unn * 1000) / (Math.sqrt(3) * Math.sqrt(Math.pow(X, 2) + Math.pow(R + arcResistance, 2))));
                let ikudmax = customRound(Math.sqrt(2) * ik3max * koefUd(R, X));
                let ikudmin = customRound(Math.sqrt(2) * ik3min * koefUd(R + arcResistance, X));
                let ika0max = customRound(Math.sqrt(2) * ik3max);
                let ika0min = customRound(Math.sqrt(2) * ik3min);
                let ik2max = customRound((schemaObj.defaultVar.unn * 1000) / (2 * Math.sqrt(Math.pow(X, 2) + Math.pow(R, 2))));
                let ik2min = customRound((schemaObj.defaultVar.unn * 1000) / (2 * Math.sqrt(Math.pow(X, 2) + Math.pow(R + arcResistance / 2, 2))));
                let ik1max = customRound((schemaObj.defaultVar.unn * 1000 * Math.sqrt(3)) / Math.sqrt(Math.pow((2 * X) + X0, 2) + Math.pow((2 * R) + R0, 2)));
                let ik1min = customRound((schemaObj.defaultVar.unn * 1000 * Math.sqrt(3)) / Math.sqrt(Math.pow((2 * X) + X0, 2) + Math.pow((2 * (R + arcResistance)) + (R0 + arcResistance), 2)));
                string += '<h5><i>Максимальное значение трехфазного тока КЗ</i>:</h5>';
                string += '<div class="table-responsive"><table class="formula-table"><tr><td rowspan="2">I<sub>к.max</sub><sup>(3)</sup> =&nbsp;</td><td style="text-align:center;">U<sub>нн</sub>&times;10<sup>3</sup></td><td rowspan="2">&nbsp;=&nbsp;</td><td style="text-align:center;">' + schemaObj.defaultVar.unn + '&times;1000</td><td rowspan="2">&nbsp;= ' + ik3max + ' кА;</td></tr><tr><td style="border-top: 1px solid #000;"> &radic;<span style="text-decoration:overline;">3</span>&times;&radic;<div style="border-top:1px solid #000;display:inline-block;margin-top:2px;">R<sub>&sum;</sub><sup>2</sup>+X<sub>&sum;</sub><sup>2</sup></div></td><td style="border-top: 1px solid #000;">&radic;<span style="text-decoration:overline;">3</span>&times;&radic;<div style="border-top:1px solid #000;display:inline-block;margin-top:2px;">' + customRound(R) + '<sup>2</sup>+' + customRound(X) + '<sup>2</sup></div></td></tr></table><br></div>';
                string += '<h5><i>Минимальное значение трехфазного тока КЗ (с учетом сопротивления дуги)</i>:</h5>';
                string += '<div class="table-responsive"><table class="formula-table"><tr><td rowspan="2">I<sub>к.min</sub><sup>(3)</sup> =&nbsp;</td><td style="text-align:center;">U<sub>нн</sub>&times;10<sup>3</sup></td><td rowspan="2">&nbsp;=&nbsp;</td><td style="text-align:center;">' + schemaObj.defaultVar.unn + '&times;1000</td><td rowspan="2">&nbsp;= ' + ik3min + ' кА;</td></tr><tr><td style="border-top: 1px solid #000;"> &radic;<span style="text-decoration:overline;">3</span>&times;&radic;<div style="border-top:1px solid #000;display:inline-block;margin-top:2px;">(R<sub>&sum;</sub>+R<sub>д</sub>)<sup>2</sup>+X<sub>&sum;</sub><sup>2</sup></div></td><td style="border-top: 1px solid #000;"> &radic;<span style="text-decoration:overline;">3</span>&times;&radic;<div style="border-top:1px solid #000;display:inline-block;margin-top:2px;">(' + customRound(R) + '+' + schemaObj.defaultVar.arcResistance + ')<sup>2</sup>+' + customRound(X) + '<sup>2</sup></div></td></tr></table><br></div>';
                string += '<p>R<sub>д</sub> - <i>сопротивление дуги, мОм</i></p>';
                string += '<h5><i>Наибольшее начальное значение апериодической составляющей тока КЗ</i>:</h5>';
                string += 'i<sub>а0.max</sub> = &radic;<span style="text-decoration:overline;">2</span>&times;I<sub>к.max</sub><sup>(3)</sup> = &radic;<span style="text-decoration:overline;">2</span>&times;' + ik3max + ' = ' + ika0max + ' кА;<br>';
                string += 'i<sub>а0.min</sub> = &radic;<span style="text-decoration:overline;">2</span>&times;I<sub>к.min</sub><sup>(3)</sup> = &radic;<span style="text-decoration:overline;">2</span>&times;' + ik3min + ' = ' + ika0min + ' кА.<br>';
                string += '<h5><i>Значение ударного тока КЗ</i>:</h5>';
                string += 'i<sub>уд.max</sub> = &radic;<span style="text-decoration:overline;">2</span>&times;I<sub>к.max</sub><sup>(3)</sup>&times;K<sub>уд</sub> = &radic;<span style="text-decoration:overline;">2</span>&times;' + ik3max + '&times;' + koefUd(R, X) + ' = ' + ikudmax + ' кА;<br>';
                string += 'i<sub>уд.min</sub> = &radic;<span style="text-decoration:overline;">2</span>&times;I<sub>к.min</sub><sup>(3)</sup>&times;K<sub>уд</sub> = &radic;<span style="text-decoration:overline;">2</span>&times;' + ik3min + '&times;' + koefUd(R + arcResistance, X) + ' = ' + ikudmin + ' кА;<br>';
                string += 'K<sub>уд</sub> - <i>Ударный коэффициент (<a href=\"#koeff\">см. кривые зависимости ударного коэффициента от отношений R/X и X/R</a>).</i></p>';
                string += '<h5><i>Максимальное значение двухфазного тока КЗ</i>:</h5>';
                string += '<div class="table-responsive"><table class="formula-table"><tr><td rowspan="2">I<sub>к.max</sub><sup>(2)</sup> =&nbsp;</td><td style="text-align:center;">U<sub>нн</sub>&times;10<sup>3</sup></td><td rowspan="2">&nbsp;=&nbsp;</td><td style="text-align:center;">' + schemaObj.defaultVar.unn + '&times;1000</td><td rowspan="2">&nbsp;= ' + ik2max + ' кА;</td></tr><tr><td style="border-top: 1px solid #000;">2&times;&radic;<div style="border-top:1px solid #000;display:inline-block;margin-top:2px;">R<sub>&sum;</sub><sup>2</sup>+X<sub>&sum;</sub><sup>2</sup></div></td><td style="border-top: 1px solid #000;">2&times;&radic;<div style="border-top:1px solid #000;display:inline-block;margin-top:2px;">' + customRound(R) + '<sup>2</sup>+' + customRound(X) + '<sup>2</sup></div></td></tr></table><br></div>';
                string += '<h5><i>Минимальное значение двухфазного тока КЗ (с учетом сопротивления дуги)</i>:</h5>';
                string += '<div class="table-responsive"><table class="formula-table"><tr><td rowspan="2">I<sub>к.min</sub><sup>(2)</sup> =&nbsp;</td><td style="text-align:center;">U<sub>нн</sub>&times;10<sup>3</sup></td><td rowspan="2">&nbsp;=&nbsp;</td><td style="text-align:center;">' + schemaObj.defaultVar.unn + '&times;1000</td><td rowspan="2">&nbsp;= ' + ik2min + ' кА;</td></tr><tr><td style="border-top: 1px solid #000;">2&times;&radic;<div style="border-top:1px solid #000;display:inline-block;margin-top:2px;">(R<sub>&sum;</sub>+R<sub>д</sub>/2)<sup>2</sup>+X<sub>&sum;</sub><sup>2</sup></div></td><td style="border-top: 1px solid #000;"> 2&times;&radic;<div style="border-top:1px solid #000;display:inline-block;margin-top:2px;">(' + customRound(R) + '+' + schemaObj.defaultVar.arcResistance + '/2)<sup>2</sup>+' + customRound(X) + '<sup>2</sup></div></td></tr></table><br></div>';
                string += '<h5><i>Максимальное значение однофазного тока КЗ</i>:</h5>';
                string += '<div class="table-responsive"><table class="formula-table"><tr><td rowspan="2">I<sub>к.max</sub><sup>(1)</sup> =&nbsp;</td><td style="text-align:center;">&radic;<span style="text-decoration:overline;">3</span>&times;U<sub>нн</sub>&times;10<sup>3</sup></td><td rowspan="2"> ;</td></tr><tr><td style="border-top: 1px solid #000;">&radic;<div style="border-top:1px solid #000;display:inline-block;margin-top:2px;">(2&timesR<sub>&sum;</sub>+R<sub>0&sum;</sub>)<sup>2</sup>+(2&timesX<sub>&sum;</sub>+X<sub>0&sum;</sub>)<sup>2</sup></div></td></tr></table><br></div>';
                string += '<div class="table-responsive"><table class="formula-table"><tr><td rowspan="2">I<sub>к.max</sub><sup>(1)</sup> =&nbsp;</td><td style="text-align:center;">&radic;<span style="text-decoration:overline;">3</span>&times;' + schemaObj.defaultVar.unn + '&times;1000</td><td rowspan="2">&nbsp;= ' + ik1max + ' кА.</td></tr><tr><td style="border-top: 1px solid #000;">&radic;<div style="border-top:1px solid #000;display:inline-block;margin-top:2px;">(2&times' + customRound(R) + '+' + customRound(R0) + ')<sup>2</sup>+(2&times' + customRound(X) + '+' + customRound(X0) + ')<sup>2</sup></div></td></tr></table></div>';
                string += '<h5><i>Минимальное значение однофазного тока КЗ (с учетом сопротивления дуги)</i>:</h5>';
                string += '<div class="table-responsive"><table class="formula-table"><tr><td rowspan="2">I<sub>к.min</sub><sup>(1)</sup> =&nbsp;</td><td style="text-align:center;">&radic;<span style="text-decoration:overline;">3</span>&times;U<sub>нн</sub>&times;10<sup>3</sup></td><td rowspan="2"> ;</td></tr><tr><td style="border-top: 1px solid #000;">&radic;<div style="border-top:1px solid #000;display:inline-block;margin-top:2px;">(2&times(R<sub>&sum;</sub>+R<sub>д</sub>)+R<sub>0&sum;</sub>+R<sub>д</sub>)<sup>2</sup>+(2&timesX<sub>&sum;</sub>+X<sub>0&sum;</sub>)<sup>2</sup></div></td></tr></table><br></div>';
                string += '<div class="table-responsive"><table class="formula-table"><tr><td rowspan="2">I<sub>к.min</sub><sup>(1)</sup> =&nbsp;</td><td style="text-align:center;">&radic;<span style="text-decoration:overline;">3</span>&times;' + schemaObj.defaultVar.unn + '&times;1000</td><td rowspan="2">&nbsp;= ' + ik1min + ' кА.</td></tr><tr><td style="border-top: 1px solid #000;">&radic;<div style="border-top:1px solid #000;display:inline-block;margin-top:2px;">(2&times(' + customRound(R) + '+' + schemaObj.defaultVar.arcResistance + ')+' + customRound(R0) + '+' + schemaObj.defaultVar.arcResistance + ')<sup>2</sup>+(2&times' + customRound(X) + '+' + customRound(X0) + ')<sup>2</sup></div></td></tr></table></div>';
                string += reportCalcKzInverse(kzIdkey, firstElement, lastElement, [ik3max, ik3min, ika0max, ika0min, ikudmax, ikudmin, ik2max, ik2min, ik1max, ik1min]);
                string += '</div></div>';
            }
            return string;
        }

        function reportCalcKzInverse(kzIdkey, firstElement, lastElement, ikArr) { //ikArr => [ik3max, ik3min, ika0max, ika0min, ikudmax, ikudmin, ik2max, ik2min, ik1max, ik1min]
            let string = '';
            if ((lastElement && lastElement.key == 'complex') || (lastElement && lastElement.key == 'ad') || (lastElement && lastElement.key == 'sd')) {
                let indexArr = lastElement.name.split(" ");
                let index = indexArr.map(function (item) {
                    return item[0].toUpperCase();
                });
                index = index.join('');
                string += '<br><h4>Точка К' + kzIdkey + ' - ' + lastElement.name + ':</h4>';
                let resistance = schemaObj.resistance[lastElement.rowId];
                let arcResistance = schemaObj.defaultVar.arcResistance * 1;
                let R = 0, X = 0, R0 = 0, X0 = 0;
                let formulaR = '', formulaX = '', formulaR0 = '', formulaX0 = '', valuesR = '', valuesX = '',
                    valuesR0 = '', valuesX0 = '';
                let pls = ' + ';
                for (let rowId in schemaObj.resistance) { //Inverse
                    if (rowId <= kzIdkey || schemaObj.elements[rowId].key == 'complex' || schemaObj.elements[rowId].key == 'ad' || schemaObj.elements[rowId].key == 'sd') {
                        continue;
                    } else {
                        if (schemaObj.resistance[rowId].r !== 0) {
                            formulaR += 'R<sub>' + symbol[schemaObj.elements[rowId].key] + '</sub>' + pls;
                            valuesR += customRound(schemaObj.resistance[rowId].r) + pls;
                            R += schemaObj.resistance[rowId].r;
                        }
                        if (schemaObj.resistance[rowId].x !== 0) {
                            formulaX += 'X<sub>' + symbol[schemaObj.elements[rowId].key] + '</sub>' + pls;
                            valuesX += customRound(schemaObj.resistance[rowId].x) + pls;
                            X += schemaObj.resistance[rowId].x;
                        }
                        if (schemaObj.resistance[rowId].r0 !== 0) {
                            formulaR0 += 'R<sub>0' + symbol[schemaObj.elements[rowId].key] + '</sub>' + pls;
                            valuesR0 += customRound(schemaObj.resistance[rowId].r0) + pls;
                            R0 += schemaObj.resistance[rowId].r0;
                        }
                        if (schemaObj.resistance[rowId].x0 !== 0) {
                            formulaX0 += 'X<sub>0' + symbol[schemaObj.elements[rowId].key] + '</sub>' + pls;
                            valuesX0 += customRound(schemaObj.resistance[rowId].x0) + pls;
                            X0 += schemaObj.resistance[rowId].x0;
                        }
                    }
                }
                if (formulaR != '') {
                    string += 'R<sub>&sum;</sub> = ' + formulaR.replace(/\+ $/g, '') + ' = ' + valuesR.replace(/\+ $/g, '') + ' = ' + customRound(R) + ' мОм;<br>';
                } else {
                    string += 'R<sub>&sum;</sub> = ' + customRound(R) + ' мОм;<br>';
                }
                if (formulaX0 != '') {
                    string += 'X<sub>&sum;</sub> = ' + formulaX.replace(/\+ $/g, '') + ' = ' + valuesX.replace(/\+ $/g, '') + ' = ' + customRound(X) + ' мОм;<br>';
                } else {
                    string += 'X<sub>&sum;</sub> = ' + customRound(X) + ' мОм;<br>';
                }
                if (formulaR0 != '') {
                    string += 'R<sub>0&sum;</sub> = ' + formulaR0.replace(/\+ $/g, '') + ' = ' + valuesR0.replace(/\+ $/g, '') + ' = ' + customRound(R0) + ' мОм;<br>';
                } else {
                    string += 'R<sub>0&sum;</sub> = ' + customRound(R0) + ' мОм;<br>';
                }
                if (formulaX0 != '') {
                    string += 'X<sub>0&sum;</sub> = ' + formulaX0.replace(/\+ $/g, '') + ' = ' + valuesX0.replace(/\+ $/g, '') + ' = ' + customRound(X0) + ' мОм;<br>';
                } else {
                    string += 'X<sub>0&sum;</sub> = ' + customRound(X0) + ' мОм;<br>';
                }
                let ik3max, ik3min, ia0max, ia0min, iudmax, iudmin, sinF, title;
                if (lastElement.key == 'complex') {
                    title = 'комплексной нагрузки';
                    sinF = Math.sin(Math.acos(resistance.cosF));
                    ik3max = resistance.Eng / (Math.sqrt(3) * Math.sqrt(Math.pow(resistance.Z1ng * resistance.cosF + R, 2) + Math.pow(resistance.Z1ng * sinF + X, 2)));
                    ik3min = resistance.Eng / (Math.sqrt(3) * Math.sqrt(Math.pow(resistance.Z1ng * resistance.cosF + R + arcResistance, 2) + Math.pow(resistance.Z1ng * sinF + X, 2)));
                    ia0max = Math.sqrt(2) * ik3max;
                    ia0min = Math.sqrt(2) * ik3min;
                    iudmax = Math.sqrt(2) * ik3max * koefUd(R, X);
                    iudmin = Math.sqrt(2) * ik3min * koefUd(R + arcResistance, X);
                    string += '<h5><i>Максимальное значение трехфазного тока КЗ</i>:</h5>';
                    string += '<div class="table-responsive"><table class="formula-table"><tr><td rowspan="2">I<sub>к.max</sub><sup>(3)</sup> =&nbsp;</td><td style="text-align:center;">E&Prime;<sub>нг</sub></td><td rowspan="2">;</td></tr><tr><td style="border-top: 1px solid #000;"> &radic;<span style="text-decoration:overline;">3</span>&times;&radic;<div style="border-top:1px solid #000;display:inline-block;margin-top:2px;">(Z<sub>1нг</sub>&times;cos&phi; + R<sub>&sum;</sub>)<sup>2</sup>+(Z<sub>1нг</sub>&times;sin&phi;+X<sub>&sum;</sub>)<sup>2</sup></div></td></tr></table><br></div>';
                    string += '<div class="table-responsive"><table class="formula-table"><tr><td rowspan="2">I<sub>к.max</sub><sup>(3)</sup> =&nbsp;</td><td style="text-align:center;">' + customRound(resistance.Eng, 1) + '</td><td rowspan="2">&nbsp;= ' + customRound(ik3max) + ' кА;</td></tr><tr><td style="border-top: 1px solid #000;"> &radic;<span style="text-decoration:overline;">3</span>&times;&radic;<div style="border-top:1px solid #000;display:inline-block;margin-top:2px;">(' + customRound(resistance.Z1ng) + '&times;' + resistance.cosF + '+' + customRound(R) + ')<sup>2</sup>+(' + customRound(resistance.Z1ng) + '&times;' + customRound(sinF) + '+' + customRound(X) + ')<sup>2</sup></div></td></tr></table><br></div>';
                    string += '<h5><i>Минимальное значение трехфазного тока КЗ (с учетом сопротивления дуги)</i>:</h5>';
                    string += '<div class="table-responsive"><table class="formula-table"><tr><td rowspan="2">I<sub>к.min</sub><sup>(3)</sup> =&nbsp;</td><td style="text-align:center;">E&Prime;<sub>нг</sub></td><td rowspan="2">;</td></tr><tr><td style="border-top: 1px solid #000;"> &radic;<span style="text-decoration:overline;">3</span>&times;&radic;<div style="border-top:1px solid #000;display:inline-block;margin-top:2px;">(Z<sub>1нг</sub>&times;cos&phi;+R<sub>&sum;</sub>+R<sub>д</sub>)<sup>2</sup>+(Z<sub>1нг</sub>&times;sin&phi;+X<sub>&sum;</sub>)<sup>2</sup></div></td></tr></table><br></div>';
                    string += '<div class="table-responsive"><table class="formula-table"><tr><td rowspan="2">I<sub>к.min</sub><sup>(3)</sup> =&nbsp;</td><td style="text-align:center;">' + customRound(resistance.Eng, 1) + '</td><td rowspan="2">&nbsp;= ' + customRound(ik3min) + ' кА;</td></tr><tr><td style="border-top: 1px solid #000;"> &radic;<span style="text-decoration:overline;">3</span>&times;&radic;<div style="border-top:1px solid #000;display:inline-block;margin-top:2px;">(' + customRound(resistance.Z1ng) + '&times;' + resistance.cosF + '+' + customRound(R) + '+' + arcResistance + ')<sup>2</sup>+(' + customRound(resistance.Z1ng) + '&times;' + customRound(sinF) + ' + ' + customRound(X) + ')<sup>2</sup></div></td></tr></table><br></div>';
                    string += '<h5><i>Наибольшее начальное значение апериодической составляющей тока КЗ</i>:</h5>';
                    string += 'i<sub>а0.max</sub> = &radic;<span style="text-decoration:overline;">2</span>&times;I<sub>к.max</sub><sup>(3)</sup> = &radic;<span style="text-decoration:overline;">2</span>&times;' + customRound(ik3max) + ' = ' + customRound(ia0max) + ' кА;<br>';
                    string += 'i<sub>а0.min</sub> = &radic;<span style="text-decoration:overline;">2</span>&times;I<sub>к.min</sub><sup>(3)</sup> = &radic;<span style="text-decoration:overline;">2</span>&times;' + customRound(ik3min) + ' = ' + customRound(ia0min) + ' кА.<br>';
                    string += '<h5><i>Значение ударного тока КЗ</i>:</h5>';
                    string += 'i<sub>уд.max</sub> = &radic;<span style="text-decoration:overline;">2</span>&times;I<sub>к.max</sub><sup>(3)</sup>&times;K<sub>уд</sub> = &radic;<span style="text-decoration:overline;">2</span>&times;' + customRound(ik3max) + '&times;' + koefUd(R, X) + ' = ' + customRound(iudmax) + ' кА;<br>';
                    string += 'i<sub>уд.min</sub> = &radic;<span style="text-decoration:overline;">2</span>&times;I<sub>к.min</sub><sup>(3)</sup>&times;K<sub>уд</sub> = &radic;<span style="text-decoration:overline;">2</span>&times;' + customRound(ik3min) + '&times;' + koefUd(R + arcResistance, X) + ' = ' + customRound(iudmin) + ' кА;<br>';
                    string += 'K<sub>уд</sub> - <i>Ударный коэффициент (<a href=\"#koeff\">см. кривые зависимости ударного коэффициента от отношений R/X и X/R</a>).</i></p>';

                } else if (lastElement.key == 'ad') {
                    title = 'асинхронного дигателя';
                    ik3max = resistance.ead / (Math.sqrt(Math.pow(resistance.rad + R, 2) + Math.pow(resistance.xad + X, 2)));
                    ik3min = resistance.ead / (Math.sqrt(Math.pow(resistance.rad + R + arcResistance, 2) + Math.pow(resistance.xad + X, 2)));
                    ia0max = Math.sqrt(2) * ik3max;
                    ia0min = Math.sqrt(2) * ik3min;
                    let tp = (resistance.xad + X) / (314 * resistance.r2);
                    let ta = (resistance.xad + X) / (314 * (resistance.r1 + R));
                    let taMin = (resistance.xad + X) / (314 * (resistance.r1 + R + arcResistance));
                    iudmax = Math.sqrt(2) * ik3max * (Math.exp(-0.01 / tp) + Math.exp(-0.01 / ta));
                    iudmin = Math.sqrt(2) * ik3min * (Math.exp(-0.01 / tp) + Math.exp(-0.01 / taMin));
                    string += '<h5><i>Максимальное значение трехфазного тока КЗ</i>:</h5>';
                    string += '<div class="table-responsive"><table class="formula-table"><tr><td rowspan="2">I<sub>к.max</sub><sup>(3)</sup> =&nbsp;</td><td style="text-align:center;">E&Prime;<sub>ф.ад</sub></td><td rowspan="2">;</td></tr><tr><td style="border-top: 1px solid #000;text-align:center;">&radic;<div style="border-top:1px solid #000;display:inline-block;margin-top:2px;">(R<sub>ад</sub>+R<sub>&sum;</sub>)<sup>2</sup>+(X&Prime;<sub>ад</sub>+X<sub>&sum;</sub>)<sup>2</sup></td></tr></table><br></div>';
                    string += '<div class="table-responsive"><table class="formula-table"><tr><td rowspan="2">I<sub>к.max</sub><sup>(3)</sup> =&nbsp;</td><td style="text-align:center;">' + customRound(resistance.ead, 1) + '</td><td rowspan="2">&nbsp;= ' + customRound(ik3max) + ' кА.</td></tr><tr><td style="border-top: 1px solid #000;">&radic;<div style="border-top:1px solid #000;display:inline-block;margin-top:2px;">(' + customRound(resistance.rad) + '+' + customRound(R) + ')<sup>2</sup>+(' + customRound(resistance.xad) + '+' + customRound(X) + ')<sup>2</sup></td></tr></table><br></div>';
                    string += '<h5><i>Минимальное значение трехфазного тока КЗ (с учетом сопротивления дуги)</i>:</h5>';
                    string += '<div class="table-responsive"><table class="formula-table"><tr><td rowspan="2">I<sub>к.min</sub><sup>(3)</sup> =&nbsp;</td><td style="text-align:center;">E&Prime;<sub>ф.ад</sub></td><td rowspan="2">;</td></tr><tr><td style="border-top: 1px solid #000;text-align:center;">&radic;<div style="border-top:1px solid #000;display:inline-block;margin-top:2px;">(R<sub>ад</sub>+R<sub>&sum;</sub>+R<sub>д</sub>)<sup>2</sup>+(X&Prime;<sub>ад</sub>+X<sub>&sum;</sub>)<sup>2</sup></td></tr></table><br></div>';
                    string += '<div class="table-responsive"><table class="formula-table"><tr><td rowspan="2">I<sub>к.min</sub><sup>(3)</sup> =&nbsp;</td><td style="text-align:center;">' + customRound(resistance.ead, 1) + '</td><td rowspan="2">&nbsp;= ' + customRound(ik3min) + ' кА.</td></tr><tr><td style="border-top: 1px solid #000;">&radic;<div style="border-top:1px solid #000;display:inline-block;margin-top:2px;">(' + customRound(resistance.rad) + '+' + customRound(R) + '+' + customRound(arcResistance) + ')<sup>2</sup>+(' + customRound(resistance.xad) + '+' + customRound(X) + ')<sup>2</sup></td></tr></table><br></div>';
                    string += '<h5><i>Наибольшее начальное значение апериодической составляющей тока КЗ</i>:</h5>';
                    string += 'i<sub>а0.max</sub> = &radic;<span style="text-decoration:overline;">2</span>&times;I<sub>к.max</sub><sup>(3)</sup> = &radic;<span style="text-decoration:overline;">2</span>&times;' + customRound(ik3max) + ' = ' + customRound(ia0max) + ' кА;<br>';
                    string += 'i<sub>а0.min</sub> = &radic;<span style="text-decoration:overline;">2</span>&times;I<sub>к.min</sub><sup>(3)</sup> = &radic;<span style="text-decoration:overline;">2</span>&times;' + customRound(ik3min) + ' = ' + customRound(ia0min) + ' кА.<br>';
                    string += '<h5><i>Значение ударного тока КЗ</i>:</h5>';
                    string += 'i<sub>уд.max</sub> = &radic;<span style="text-decoration:overline;">2</span>&times;I<sub>к.max</sub><sup>(3)</sup>&times;(e<sup>-0.01/Tp</sup>+e<sup>-0.01/Ta</sup>);<br><br>';
                    string += 'T<sub>p</sub> - Расчетная постоянная времени затухания периодической составляющей тока статора, с;<br>';
                    string += 'T<sub>a</sub> - Постоянная времени затухания апериодической составляющей тока статора, с;<br>';
                    string += 'T<sub>p</sub> = X&Prime;<sub>ад</sub>+X<sub>&sum;</sub>/314&times;R<sub>2</sub> = ' + customRound(resistance.xad) + '+' + customRound(X) + '/314&times;' + customRound(resistance.r2) + ' = ' + customRound(tp) + ' с;<br>';
                    string += 'T<sub>a</sub> =  X&Prime;<sub>ад</sub>+X<sub>&sum;</sub>/314&times;(R<sub>1</sub>+R<sub>&sum;</sub>) = ' + customRound(resistance.xad) + '+' + customRound(X) + '/314&times;(' + customRound(resistance.r1) + '+' + customRound(R) + ') = ' + customRound(ta) + ' с.<br><br>';
                    string += 'i<sub>уд.max</sub> = &radic;<span style="text-decoration:overline;">2</span>&times;' + customRound(ik3max) + '&times;(e<sup>-0.01/' + customRound(tp) + '</sup>+e<sup>-0.01/' + customRound(ta) + '</sup>) = ' + customRound(iudmax) + ' кА.<br><br>';
                    string += 'i<sub>уд.min</sub> = &radic;<span style="text-decoration:overline;">2</span>&times;I<sub>к.min</sub><sup>(3)</sup>&times;(e<sup>-0.01/Tp</sup>+e<sup>-0.01/Ta</sup>);<br><br>';
                    string += 'T<sub>a</sub> =  X&Prime;<sub>ад</sub>+X<sub>&sum;</sub>/314&times;(R<sub>1</sub>+R<sub>&sum;</sub>+R<sub>д</sub>) = ' + customRound(resistance.xad) + '+' + customRound(X) + '/314&times;(' + customRound(resistance.r1) + '+' + customRound(R) + '+' + customRound(arcResistance) + ') = ' + customRound(taMin) + ' с.<br><br>';
                    string += 'i<sub>уд.min</sub> = &radic;<span style="text-decoration:overline;">2</span>&times;' + customRound(ik3min) + '&times;(e<sup>-0.01/' + customRound(tp) + '</sup>+e<sup>-0.01/' + customRound(taMin) + '</sup>) = ' + customRound(iudmin) + ' кА.<br><br>';
                } else if (lastElement.key == 'sd') {
                    title = 'синхронного дигателя';
                    ik3max = resistance.esd / (Math.sqrt(Math.pow(resistance.rsd + R, 2) + Math.pow(resistance.xsd + X, 2)));
                    ik3min = resistance.esd / (Math.sqrt(Math.pow(resistance.rsd + R + arcResistance, 2) + Math.pow(resistance.xsd + X, 2)));
                    ia0max = Math.sqrt(2) * ik3max;
                    ia0min = Math.sqrt(2) * ik3min;
                    let ta = (resistance.xsd + X) / (314 * (resistance.rsd + R));
                    let taMin = (resistance.xsd + X) / (314 * (resistance.rsd + R + arcResistance));
                    iudmax = Math.sqrt(2) * ik3max * (1 + Math.exp(-0.01 / ta));
                    iudmin = Math.sqrt(2) * ik3min * (1 + Math.exp(-0.01 / taMin));
                    string += '<h5><i>Максимальное значение трехфазного тока КЗ</i>:</h5>';
                    string += '<div class="table-responsive"><table class="formula-table"><tr><td rowspan="2">I<sub>к.max</sub><sup>(3)</sup> =&nbsp;</td><td style="text-align:center;">E&Prime;<sub>ф.сд</sub></td><td rowspan="2">;</td></tr><tr><td style="border-top: 1px solid #000;text-align:center;">&radic;<div style="border-top:1px solid #000;display:inline-block;margin-top:2px;">(R<sub>сд</sub>+R<sub>&sum;</sub>)<sup>2</sup>+(X&Prime;<sub>d</sub>+X<sub>&sum;</sub>)<sup>2</sup></td></tr></table><br></div>';
                    string += '<div class="table-responsive"><table class="formula-table"><tr><td rowspan="2">I<sub>к.max</sub><sup>(3)</sup> =&nbsp;</td><td style="text-align:center;">' + customRound(resistance.esd, 1) + '</td><td rowspan="2">&nbsp;= ' + customRound(ik3max) + ' кА.</td></tr><tr><td style="border-top: 1px solid #000;">&radic;<div style="border-top:1px solid #000;display:inline-block;margin-top:2px;">(' + customRound(resistance.rsd) + '+' + customRound(R) + ')<sup>2</sup>+(' + customRound(resistance.xsd) + '+' + customRound(X) + ')<sup>2</sup></td></tr></table><br></div>';
                    string += '<h5><i>Минимальное значение трехфазного тока КЗ (с учетом сопротивления дуги)</i>:</h5>';
                    string += '<div class="table-responsive"><table class="formula-table"><tr><td rowspan="2">I<sub>к.min</sub><sup>(3)</sup> =&nbsp;</td><td style="text-align:center;">E&Prime;<sub>ф.сд</sub></td><td rowspan="2">;</td></tr><tr><td style="border-top: 1px solid #000;text-align:center;">&radic;<div style="border-top:1px solid #000;display:inline-block;margin-top:2px;">(R<sub>сд</sub>+R<sub>&sum;</sub>+R<sub>д</sub>)<sup>2</sup>+(X&Prime;<sub>d</sub>+X<sub>&sum;</sub>)<sup>2</sup></td></tr></table><br></div>';
                    string += '<div class="table-responsive"><table class="formula-table"><tr><td rowspan="2">I<sub>к.min</sub><sup>(3)</sup> =&nbsp;</td><td style="text-align:center;">' + customRound(resistance.esd, 1) + '</td><td rowspan="2">&nbsp;= ' + customRound(ik3min) + ' кА.</td></tr><tr><td style="border-top: 1px solid #000;">&radic;<div style="border-top:1px solid #000;display:inline-block;margin-top:2px;">(' + customRound(resistance.rsd) + '+' + customRound(R) + '+' + customRound(arcResistance) + ')<sup>2</sup>+(' + customRound(resistance.xsd) + '+' + customRound(X) + ')<sup>2</sup></td></tr></table><br></div>';
                    string += '<h5><i>Наибольшее начальное значение апериодической составляющей тока КЗ</i>:</h5>';
                    string += 'i<sub>а0.max</sub> = &radic;<span style="text-decoration:overline;">2</span>&times;I<sub>к.max</sub><sup>(3)</sup> = &radic;<span style="text-decoration:overline;">2</span>&times;' + customRound(ik3max) + ' = ' + customRound(ia0max) + ' кА;<br>';
                    string += 'i<sub>а0.min</sub> = &radic;<span style="text-decoration:overline;">2</span>&times;I<sub>к.min</sub><sup>(3)</sup> = &radic;<span style="text-decoration:overline;">2</span>&times;' + customRound(ik3min) + ' = ' + customRound(ia0min) + ' кА.<br>';
                     string += '<h5><i>Значение ударного тока КЗ</i>:</h5>';
                    string += 'i<sub>уд.max</sub> = &radic;<span style="text-decoration:overline;">2</span>&times;I<sub>к.max</sub><sup>(3)</sup>&times;(1+e<sup>-0.01/Ta</sup>);<br><br>';
                    string += 'T<sub>a</sub> - Постоянная времени затухания апериодической составляющей тока статора, с;<br>';
                    string += 'T<sub>a</sub> =  X&Prime;<sub>d</sub>+X<sub>&sum;</sub>/314&times;(R<sub>сд</sub>+R<sub>&sum;</sub>) = ' + customRound(resistance.xsd) + '+' + customRound(X) + '/314&times;(' + customRound(resistance.rsd) + '+' + customRound(R) + ') = ' + customRound(ta) + ' с.<br><br>';
                    string += 'i<sub>уд.max</sub> = &radic;<span style="text-decoration:overline;">2</span>&times;' + customRound(ik3max) + '&times;(1+e<sup>-0.01/' + customRound(ta) + '</sup>) = ' + customRound(iudmax) + ' кА.<br><br>';
                    string += 'i<sub>уд.min</sub> = &radic;<span style="text-decoration:overline;">2</span>&times;I<sub>к.min</sub><sup>(3)</sup>&times;(1+e<sup>-0.01/Ta</sup>).<br><br>';
                    string += 'T<sub>a</sub> =  X&Prime;<sub>d</sub>+X<sub>&sum;</sub>/314&times;(R<sub>сд</sub>+R<sub>&sum;</sub>+R<sub>д</sub>) = ' + customRound(resistance.xsd) + '+' + customRound(X) + '/314&times;(' + customRound(resistance.rsd) + '+' + customRound(R) + '+' + customRound(arcResistance) + ') = ' + customRound(taMin) + ' с.<br><br>';
                    string += 'i<sub>уд.min</sub> = &radic;<span style="text-decoration:overline;">2</span>&times;' + customRound(ik3min) + '&times;(1+e<sup>-0.01/' + customRound(taMin) + '</sup>) = ' + customRound(iudmin) + ' кА.<br><br>';
                }
                if (schemaObj.resistance[lastElement.rowId].current < (10 * ikArr[0])) {
                    console.log(schemaObj);
                    string += '<span class="text-danger"><strong>I<sub>' + index + '</sub> = ' + customRound(schemaObj.resistance[lastElement.rowId].current, 1) + 'А < ' + customRound(ikArr[0] * 10, 1) + 'А (0,01&times;I<sub>к.max</sub>), значит ток подпитки от ' + title + ' можно не учитывать!</strong></span><br>';
                    string += '<h4>Так как ток подпитки от ' + title + ' не учитываем, суммарный ток трехфазного КЗ на участке ' + kzIdkey + ' равен току в ветви ' + firstElement.name + ' - Точка К' + kzIdkey + ':</h4>';
                    string += '<strong>I<sub>к.max</sub><sup>(3)</sup> = ' + customRound(ikArr[0]) + ' кА</strong>;<br>';
                    string += '<strong>I<sub>к.min</sub><sup>(3)</sup> = ' + customRound(ikArr[1]) + ' кА</strong>;<br>';
                    string += '<strong>i<sub>а0.max</sub> = ' + customRound(ikArr[2]) + ' кА</strong>;<br>';
                    string += '<strong>i<sub>а0.min</sub> = ' + customRound(ikArr[3]) + ' кА</strong>;<br>';
                    string += '<strong>i<sub>уд.max</sub> = ' + customRound(ikArr[4]) + ' кА</strong>;<br>';
                    string += '<strong>i<sub>уд.min</sub> = ' + customRound(ikArr[5]) + ' кА</strong>.<br>';
                } else {
                    string += '<h4>Суммарный ток трехфазного КЗ на участке ' + kzIdkey + ' с учетом подпитки от ' + title + ':</h4>';
                    string += '<strong>I<sub>к.max</sub><sup>(3)</sup> = ' + customRound(ikArr[0]) + '+' + customRound(ik3max) + ' = ' + customRound(ikArr[0] + ik3max) + ' кА</strong>;<br>';
                    string += '<strong>I<sub>к.min</sub><sup>(3)</sup> = ' + customRound(ikArr[1]) + '+' + customRound(ik3min) + ' = ' + customRound(ikArr[1] + ik3min) + ' кА</strong>;<br>';
                    string += '<strong>i<sub>а0.max</sub> = ' + customRound(ikArr[2]) + '+' + customRound(ia0max) + ' = ' + customRound(ikArr[2] + ia0max) + ' кА</strong>;<br>';
                    string += '<strong>i<sub>а0.min</sub> = ' + customRound(ikArr[3]) + '+' + customRound(ia0min) + ' = ' + customRound(ikArr[3] + ia0min) + ' кА</strong>;<br>';
                    string += '<strong>i<sub>уд.max</sub> = ' + customRound(ikArr[4]) + '+' + customRound(iudmax) + ' = ' + customRound(ikArr[4] + iudmax) + ' кА</strong>;<br>';
                    string += '<strong>i<sub>уд.min</sub> = ' + customRound(ikArr[5]) + '+' + customRound(iudmin) + ' = ' + customRound(ikArr[5] + iudmin) + ' кА</strong>.<br>';
                }
            }
            return string;
        }

        function reportSchema() {
            let string = '';
            let ifComplex = false;
            let chart = '';
            for (let rowId in schemaObj.elements) {
                let title = '';
                if (schemaObj.elements[rowId].title !== null) {
                    title = schemaObj.elements[rowId].title;
                } else {
                    title = schemaObj.elements[rowId].name;
                }
                if (schemaObj.templates[rowId][0].textItem !== null) {
                    title += '<br>' + schemaObj.templates[rowId][0].textItem;
                }
                string += '<div class="row">';
                string += '    <div class="col-xs-6">';
                string += '        <div class="reportTitle"><span><strong> ' + rowId + ') </strong></span><span> ' + title + ' </span></div>';
                string += '    </div>';
                string += '    <div class="col-xs-6">';
                let img;
                if (schemaObj.elements[rowId].key == 'energySystem') {
                    img = reportSysSvg;
                } else if (schemaObj.elements[rowId].key == 'hookup') {
                    img = reportRSvg;
                } else if (schemaObj.elements[rowId].key == 'complex') {
                    img = reportComplexSvg;
                    ifComplex = true;
                    chart = chartComplex[schemaObj.templates[rowId][0].valueItem];
                } else if (schemaObj.elements[rowId].key == 'ad') {
                    img = reportAdSvg;
                } else if (schemaObj.elements[rowId].key == 'sd') {
                    img = reportAdSvg;
                } else {
                    img = reportRxSvg;
                }
                let pointKz = '';
                let pointKzImg = '';
                if (schemaObj.elements[rowId].pointKz !== null) {
                    pointKz = ' pointKz';
                    pointKzImg = '<span>К' + rowId + '</span> ' + pointKzSvg;
                }
                string += '        <div class="' + schemaObj.elements[rowId].key + 'Image' + pointKz + '">';
                string += '            <div class="resistanceData">' + addResistance(rowId, true) + '</div>';
                string += '            <div id="pointKzWrapper' + rowId + '" class="pointKzWrapper">' + pointKzImg + '</div>';
                string += img;
                string += '        </div>';
                string += '    </div>';
                string += '</div>';
            }
            string += '<div class="row"><a name="koeff"></a>';
            string += '    <div class="col-xs-12 img-responsive">';
            string += '    <br><br><h4>Кривые зависимости ударного коэффициента от отношений R/X и X/R:</h4>';
            string += chartRXSvg;
            string += '    </div>';
            string += '    <div class="col-xs-12 img-responsive"><br>';
            string += chartXRSvg;
            string += '    </div>';
            string += '</div>';
            if (ifComplex == true) {
                string += '<div class="row"><a name="chart"></a>';
                string += '    <div class="col-xs-12 img-responsive">';
                string += '    <br><br><h4>Зависимость параметров комплексной нагрузки Z<sub>1нг</sub>, Z<sub>2нг</sub>, Z<sub>0нг</sub>, E<sub>нг</sub> от её состава:</h4>';
                string += chart;
                string += '    </div>';
                string += '</div>';
            }
            return string;
        }

        function koefUd(r, x) {
            let rx = r / x;
            let xr = x / r;
            let koef, krx, kxr;
            for (let rxKey in koefUdRX) {
                let koefRX = koefUdRX[rxKey];
                rxKey = +rxKey;
                krx = koefRX;
                if (rxKey > rx) {
                    break;
                }
            }
            for (let xrKey in koefUdXR) {
                let koefXR = koefUdXR[xrKey];
                xrKey = +xrKey;
                kxr = koefXR;
                if (xrKey > xr) {
                    break;
                }
            }
            koef = Math.max(krx, kxr);
            return koef;
        }

        function result(data) {
            let string = '';
            let resultBlock = document.getElementById('projectResult');
            let setBlock = document.getElementById('projectSet');
            string += '<button type="button" id="report-close" class="close hidden-print"><span>&times;</span></button>';
            string += '<div class="container">';
            string += data;
            string += '</div>';
            string += '</div>';
            setBlock.style.display = 'none';
            resultBlock.innerHTML = string;
            window.scrollTo(0, 0);
            let close = document.getElementById("report-close");
            close.onclick = function () {
                resultBlock.innerHTML = '';
                setBlock.style.display = 'block';
            }
        }

        function resultClose() {
            let close = document.getElementById("report-close");
            let resultBlock = document.getElementById('projectResult');
            let setBlock = document.getElementById('projectSet');
            if (close) {
                window.scrollTo(0, 0);
                resultBlock.innerHTML = '';
                setBlock.style.display = 'block';
            }
        }

        function saveLocalScheme() {
            let html = '';
            let name = '';
            let data;
            html += '<div class="form-group"><label><i>Введите название проекта</i></label>';
            html += '<input name="projectName" class="form-control" id="projectName" type="text" value="">';
            html += '</div>';
            html += '<span id="saveProject" class="btn btn-success">Сохранить</span>';
            customModal(html);
            let elName = document.getElementById("projectName");
            let elSave = document.getElementById("saveProject");
            name = projectName.addEventListener("change", function () {
                name = elName.value;
                return name;
            });

            elSave.addEventListener("click", function () {
                try {
                    let projectsId = localStorage.getItem('projectsId');
                    if (projectsId === null) {
                        projectsId = [];
                    }
                    else {
                        projectsId = JSON.parse(projectsId);
                    }
                    if (name === undefined) {
                        name = 'Проект ';
                    } else {
                        name = name.replace(/[\\\|\'\"\#^\:\;\\$\%\&\?\/]/g, '');
                        name += ' ';
                    }
                    let date = getDate();
                    let id = date.replace(/[.: ]/g, '');
                    let str = id + '|' + name + '|' + date;
                    let max = 20;
                    if (projectsId.length > max) {
                        let del = projectsId.shift();
                        let delId = del.split('|');
                        localStorage.removeItem(delId[0]);
                    }
                    projectsId.push(str);
                    localStorage.setItem(id, JSON.stringify(schemaObj));
                    localStorage.setItem('projectsId', JSON.stringify(projectsId));
                    customModal(textProjectSaved);
                } catch (err) {
                    customModal(textLocalError);
                }
            });
        }

        function loadLocalScheme() {
            let html = '';
            let projectsId;
            try {
                projectsId = localStorage.getItem('projectsId');
                let id;
                if (projectsId == null) {
                    customModal(textDontHaveSavProject);
                } else {
                    projectsId = JSON.parse(projectsId);

                    html = '<div class="form-group"><label><i>Выберите проект</i></label>';
                    html += '<select id="projectSelect" class="form-control" name="projectSelect">';
                    html += " <option value=''>--- Сделайте выбор ---</option>";
                    for (let i = 0; i < projectsId.length; i++) {
                        let projectsIdArray = projectsId[i].split('|');
                        html += "<option value='" + projectsIdArray[0] + "'>" + projectsIdArray[1] + "  -  " + projectsIdArray[2] + "</option>";
                    }
                    html += '</select>';
                    html += '</div>';
                    html += '<span id="loadProject" class="btn btn-success">Загрузить</span>';
                    customModal(html);
                    let elSelect = document.getElementById("projectSelect");
                    let elLoad = document.getElementById("loadProject");
                    id = elSelect.addEventListener("change", function () {
                        id = elSelect.value;
                        return id;
                    });
                    elLoad.addEventListener("click", function () {
                        let projectId = localStorage.getItem(id);
                        if (projectId !== null) {
                            resultClose();
                            renderScheme(projectId);
                        }
                    });
                }
            } catch (err) {
                customModal(textLocalError);
            }
        }

        function saveFileScheme() {
            let html = '';
            let name = '';
            let data;
            html += '<div class="form-group"><label><i>Введите название проекта</i></label>';
            html += '<input name="projectName" class="form-control" id="projectName" type="text" value="">';
            html += '</div>';
            html += '<a href="javascript:void(0)" id="saveProject" class="btn btn-success">Сохранить</a>';
            customModal(html);
            let elName = document.getElementById("projectName");
            let elSave = document.getElementById("saveProject");
            name = projectName.addEventListener("change", function () {
                name = elName.value;
                return name;
            });

            elSave.addEventListener("click", function () {
                try {
                    let project = JSON.stringify(schemaObj);
                    if (name === undefined) {
                        name = 'Проект ';
                    } else {
                        name = name.replace(/[\\\|\'\"\#^\:\;\\$\%\&\?\/]/g, '');
                        name += ' ';
                    }
                    let type = 'text/plain';
                    let date = getDate();
                    let id = date.replace(/[: ]/g, '_');
                    name = name + id + '.txt';
                    let file = new Blob([project], {type: type});
                    if (window.navigator.msSaveOrOpenBlob) // IE10+
                        window.navigator.msSaveOrOpenBlob(file, name);
                    else {
                        elSave.href = URL.createObjectURL(file);
                        elSave.download = name;
                    }
                    customModal(textProjectSendSaved);
                } catch (err) {
                    customModal(textSaveFileError);
                }
            });
        }

        function loadFileScheme() {
            let html = '';
            html += '<div class="form-group">';
            html += '<label for="loadFile">Выберите файл проекта</label>';
            html += '<input type="file" id="loadFile" name="loadFile" />';
            html += '<div id="importDataBlock"></div>';
            html += '<div id="dataFileBlock"></div>';
            html += '</div>';
            customModal(html);
            let loadFileId = document.getElementById('loadFile');
            let dataFileBlock = document.getElementById('dataFileBlock');
            loadFileId.addEventListener('change', function (evt) {
                let files = evt.target.files;
                let file = files[0];
                let reader = new FileReader();
                reader.onload = function (theFile) {
                    dataFileBlock.innerHTML = theFile.target.result;
                    document.getElementById('importDataBlock').innerHTML = '<span id="importData" class="btn btn-primary mt1" onclick="importDataInFile()">Импортировать проект</span>';
                }
                reader.readAsText(file);
            });
        }

        function importDataInFile() {
            let dataFileBlock = document.getElementById('dataFileBlock').innerHTML;
            let data = JSON.parse(dataFileBlock);
            //schemaObj = data;
            resultClose();
            renderScheme(JSON.stringify(data));
        }

        function renderScheme(loadedObject) {
            let tbody = document.getElementById('dynamic');
            let arcSelectVar = document.getElementById("arcSelect");
            let arcInputVar = document.getElementById("arcInput");
            let html = '';
            let complex = [];
            if (loadedObject !== null) {
                schemaObj = JSON.parse(loadedObject);
                arcInputVar.value = schemaObj.defaultVar.arcResistance;
                arcSelectVar.innerHTML = addOption(arcArray, schemaObj.defaultVar.arcResistance);
                for (rowId in schemaObj.elements) {
                    let title;
                    if (schemaObj.elements[rowId].title !== null) {
                        title = schemaObj.elements[rowId].title;
                    } else {
                        title = schemaObj.elements[rowId].name;
                    }
                    html += "<tr id=\"row" + rowId + "\">";
                    html += "   <td id=\"elementSelect" + rowId + "\">";
                    html += "       <div class=\"form-inline\">";
                    html += "           <div class=\"form-group\"><label>" + rowId + "</label>&nbsp;";
                    html += "               <input id=\"elementSelectVal" + rowId + "\" class=\"form-control select\" type=\"text\" name=\"elementSelectVal[" + rowId + "]\" onchange=\"changeElementTitleValue(this.id," + rowId + ")\" value=\"" + title + "\">";
                    html += "           </div>";
                    html += "       </div>";
                    html += "   </td>";
                    html += "   <td id=\"elementScheme" + rowId + "\" class=\"elementScheme\">" + renderItemScheme(schemaObj.elements[rowId].key, rowId, addResistance(rowId, true)) + "</td>";
                    html += "   <td id=\"elementData" + rowId + "\" class=\"elementData\">" + htmlDecode(renderTemplateItemData(schemaObj.elements[rowId].key, rowId, true)) + "</td>";
                    html += "   <td id=\"pointKz" + rowId + "\" class=\"elementPointKz\">" + renderItemPointKz(schemaObj.elements[rowId].key, rowId, schemaObj.elements[rowId].pointKz) + "</td>";
                    html += "   <td><input type=\"button\" value=\"Удалить\" class=\"delete btn btn-danger\" onclick=\"deleteRow(" + rowId + ")\"></td>";
                    html += "</tr>";
                    if (schemaObj.elements[rowId].key == 'complex') {
                        complex = [rowId, schemaObj.templates[rowId][0].valueItem];
                    }
                }
                html += "<tr class=\"table-row\"><td class=\"selector\"><select id=\"elementSelect\" class=\"form-control\" name=\"elementSelect\">";
                html += addElementsSelect();
                html += "</select></td><td class=\"elementScheme\"></td><td class=\"elementData\"></td><td class=\"elementPointKz\"></td><td class=\"rowAddDel\"><input type=\"button\" class=\"add btn btn-success\" onclick=\"addRow(schemaObj);\" value=\"Добавить\"></td></tr>";
            }
            tbody.innerHTML = html;
            if (schemaObj.elements[rowId].key == 'complex') {
                changeElementImg(complex[0], complex[1]);
            }
        }

        function customRound(num, digit) {
            if (digit === undefined) {
                digit = 3;
            }
            let res = +parseFloat(num).toFixed(digit);
            return res;
        }

        function getDate() {
            let date = new Date();
            let dd = date.getDate();
            let mm = date.getMonth() + 1; //January is 0!
            let yyyy = date.getFullYear();
            let h = date.getHours();
            let m = date.getMinutes();
            let s = date.getSeconds();
            let ms = date.getMilliseconds();
            if (dd < 10) {
                dd = '0' + dd;
            }
            if (mm < 10) {
                mm = '0' + mm;
            }
            let today = dd + '.' + mm + '.' + yyyy + ' ' + h + ':' + m + ':' + s;
            let key = dd + mm + yyyy + h + m + s + ms;
            return today;
        }

        function htmlDecode(str) {
            let result = str.replace(/&gt;/g, '>');
            result = result.replace(/&lt;/g, '<');
            //result = result.replace(/&quot;/g, '"');
            //result = result.replace(/&apos;/g, "'");
            //result = result.replace(/&amp;/g, '&');
            return result;
        };

        function htmlEncode(str) {
            let result = str.replace(/>/g, '&gt;');
            result = result.replace(/</g, '&lt;');
            //result = result.replace(/"/g, '&quot;');
            //result = result.replace(/'/g, "&apos;");
            //result = result.replace(/&/g, '&amp;');
            return result;
        };

        function iterationCopy(src) {
            let target = {};
            for (let prop in src) {
                if (src.hasOwnProperty(prop)) {
                    target[prop] = src[prop];
                }
            }
            return target;
        }

        function changeElementComplex(elementId, rowId) {
            schemaObj.resistanceStatus[rowId] = false;
            schemaObj.resistance[rowId] = {
                powerSum: null,
                current: null,
                cosF: null,
                bazis: null,
                EngRel: null,
                Z1ngRel: null,
                Z2ngRel: null,
                Z0ngRel: null,
                Eng: null,
                Z1ng: null,
                Z2ng: null,
                Z0ng: null
            };
            let elSelect = document.getElementById(elementId);
            let elSelectValue = elSelect.value;
            changeElementImg(rowId, elSelectValue);
            changeElementCos(rowId, elSelectValue);
            if (elSelectValue == '') {
                document.getElementById("complex-data").innerHTML = '';
            } else {
                renderTemplComplex(elSelectValue, rowId);
                //changeElementValue(elementId, rowId);
            }
            changeElementValue(elementId, rowId);
            document.getElementById("complexResistance" + rowId).innerHTML = '';
        }

        function renderTemplComplex(elSelectValue, rowId) {
            schemaObj.templates[rowId].length = complexTemplate.length;
            let html = '';
            let titleArray = elSelectValue.split('_');
            for (let i = 0; i < titleArray.length; i++) {
                let complexTemplateLoc = {
                    typeItem: 'input',
                    idItem: titleArray[i] + "_" + rowId,
                    classItem: 'form-control w1',
                    valueItem: '',
                    textItem: null,
                    labelItem: htmlEncode('<i>' + complexTitle[titleArray[i]] + '</i> =&nbsp;'),
                    functionItem: 'changeElementValue',
                    wrapperItemStart: htmlEncode('<div class=\"form-group\">'),
                    wrapperItemEnd: htmlEncode('</div>'),
                    suffixItem: ' кВт',
                    outerData: null
                }
                schemaObj.templates[rowId].push(complexTemplateLoc);
                html += "   <div class=\"form-group\"><label for=\"" + titleArray[i] + rowId + "\"><i>" + complexTitle[titleArray[i]] + " </i> =&nbsp;</label>";
                html += "       <input id=\"" + titleArray[i] + "_" + rowId + "\" onchange=\"changeElementValue(this.id, " + rowId + ")\" class=\"form-control w1\" type=\"text\" data-templatearraykey=\"" + (i + complexTemplate.length) + "\" name=\"" + titleArray[i] + rowId + "\" value=\"\"> кВт";
                html += "   </div>";
            }
            document.getElementById("complex-data").innerHTML = html;
        }
