(function($) {
    $.fn.randomImageGrid = function(options) {
        var defaults = {
                rowsNumber: 2,
                colsNumber: 3,
                speed: 2000,
                effectDuration: 500,
                effectAdd: 'fadeIn',
                effectRemove: 'fadeOut',
                singleResponsive: false
            },
            settings = $.extend({}, defaults, options),
            element = this,
            totalWidth = 100,
            $allItems = $(element).find('li'),
            itemsNumber = $allItems.length,
            elementsToDisplay = ((settings.singleResponsive) && (screen.width<768)) ? 1 : settings.rowsNumber * settings.colsNumber,
            $displayedElements = $(element).find('li:lt(' + elementsToDisplay + ')'),
            allNumbersToHandle = [],
            currentNumbersToHandle = copyArray(allNumbersToHandle),
            lastNumberInCycle,
            arrayEffectAdd = ['fadeIn', 'fadeInDown', 'fadeInLeft', 'fadeInRight', 'fadeInUp', 'flipInX', 'flipInY', 'lightSpeedIn', 'rotateIn', 'rotateInDownLeft', 'rotateInDownRight', 'rotateInUpLeft', 'rotateInUpRight', 'rollIn', 'zoomIn', 'zoomInDown', 'zoomInLeft', 'zoomInRight', 'zoomInUp', 'slideInDown', 'slideInLeft', 'slideInRight', 'slideInUp'],
            arrayEffectRemove = ['fadeOut', 'fadeOutDown', 'fadeOutLeft', 'fadeOutRight', 'fadeOutUp', 'flipOutX', 'flipOutY', 'lightSpeedOut', 'rotateOut', 'rotateOutDownLeft', 'rotateOutDownRight', 'rotateOutUpLeft', 'rotateOutUpRight', 'rollOut', 'zoomOut', 'zoomOutDown', 'zoomOutLeft', 'zoomOutRight', 'zoomOutUp', 'slideOutDown', 'slideOutLeft', 'slideOutRight', 'slideOutUp']
        getDisplayedNumbers($displayedElements, allNumbersToHandle);
        adjustWidth();
        $(window).resize(function() {
            adjustWidth();
        });
        setInterval(swapRandomImage, settings.speed);

        function adjustWidth() {
            var currentWidth = $(window).width(),
                itemWidth = $allItems.find('img').first().width(),
                breezingRoom = 100,
                minAllowedWidth = itemWidth * settings.colsNumber + breezingRoom,
                maxColNumber = Math.floor((currentWidth) / itemWidth - 0.5);
            if (currentWidth < minAllowedWidth) {
                settings.colsNumber = maxColNumber;
            } else {
                if (settings.colsNumber < options.colsNumber) {
                    if (maxColNumber < options.colsNumber) {
                        settings.colsNumber = maxColNumber;
                    } else {
                        settings.colsNumber = options.colsNumber;
                    }
                }
            }
            changeCss();
        }

        function changeCss() {
            var elementsToDisplayIndex = elementsToDisplay - 1,
                itemWidth = totalWidth / settings.colsNumber - 1;
            $(element).css({
                "max-width": totalWidth + "%",
            });
            $allItems.css({
                "width": itemWidth + "%",
                "list-style": "none",
                "display": "inline-block",
                "padding-bottom": "10px",
                "animation-duration": String(settings.effectDuration) + "ms"
            });
            $allItems.addClass('animated');
            $(element).find('li:gt(' + elementsToDisplayIndex + ')').hide();
        }

        function swapRandomImage() {
            var randomIndexToHandle, $oldItem, oldSrc, numToShow = generateRandomNumber(itemsNumber, elementsToDisplay),
                $newItem = $allItems.eq(numToShow),
                newSrc = $newItem.find('img').attr('src'),
                noItemsToHandle = !currentNumbersToHandle.length,
                lastItemToHandle = (currentNumbersToHandle.length == 1),
                effectAdd = settings.effectAdd,
                effectRemove = settings.effectRemove,
                lastNumberInCycleNotNeeded;
            if (noItemsToHandle) {
                currentNumbersToHandle = copyArray(allNumbersToHandle);
            }
            lastNumberInCycleNotNeeded = lastNumberInCycle && (currentNumbersToHandle.length < $displayedElements.length);
            if (lastNumberInCycleNotNeeded) {
                lastNumberInCycle = null;
            }
            randomIndexToHandle = getNonRepeatingIndex();
            $oldItem = $allItems.eq(currentNumbersToHandle[randomIndexToHandle]);
            oldSrc = $oldItem.find('img').attr('src');
            if (lastItemToHandle) {
                lastNumberInCycle = $oldItem.index();
            }
            forgetItem($oldItem.index());
            if (settings.effectAdd == 'random') {
                effectAdd = generateRandomEffect(arrayEffectAdd);
            }
            if (settings.effectRemove == 'random') {
                effectRemove = generateRandomEffect(arrayEffectRemove);
            }
            $oldItem.addClass(effectRemove);
            setTimeout(function() {
                $oldItem.removeClass(effectRemove).find('img').attr('src', newSrc);;
                $oldItem.addClass(effectAdd);
                $newItem.find('img').attr('src', oldSrc);
                setTimeout(function() {
                    $oldItem.removeClass(effectAdd);
                }, settings.effectDuration);
            }, settings.effectDuration);
            return this;
        }

        function getDisplayedNumbers(arrayFrom, arrayTo) {
            arrayFrom.each(function(index) {
                arrayTo.push(index);
            });
        }

        function copyArray(array) {
            return array.slice(0);
        }

        function getNonRepeatingIndex() {
            var randomIndex = Math.floor(Math.random() * currentNumbersToHandle.length);
            if (lastItemRepeats(randomIndex)) {
                return randomIndex ? --randomIndex : ++randomIndex;
            } else {
                return randomIndex;
            }
        }

        function lastItemRepeats(randomIndex) {
            return lastNumberInCycle && (currentNumbersToHandle.length === $displayedElements.length) && (lastNumberInCycle === randomIndex);
        }

        function forgetItem(item) {
            currentNumbersToHandle.splice($.inArray(item, currentNumbersToHandle), 1);
        }

        function generateRandomNumber(max, min) {
            return Math.floor(Math.random() * (max - min) + min);
        }

        function generateRandomEffect(arrayEffects) {
            var min = 0,
                max = arrayEffects.length - 1;
            return arrayEffects[Math.floor(Math.random() * (max - min) + min)];
        }
    }
})(jQuery);