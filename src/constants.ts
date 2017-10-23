
export const CONSTANTS = {
    // Key codes
    KEYS: {
        up: 38,
        down: 40,
        left: 37,
        right: 39,
        escape: 27,
        enter: 13,
        backspace: 8,
        delete: 46,
        shift: 16,
        leftCmd: 91,
        rightCmd: 93,
        ctrl: 17,
        alt: 18,
        tab: 9
    },
    TEMPLATES: {
        SELECTOR: `<div class="selector-container"
            ng-attr-dir="{{ rtl ? 'rtl' : 'ltr' }}"
            ng-class="{
                open: isOpen, 
                empty: !filteredOptions.length && 
                    (!create || !search), multiple: multiple, 
                    'has-value': hasValue(), 
                    rtl: rtl, 
                    'loading': loading, 
                    'remove-button': removeButton, 
                    disabled: disabled}">
            <select name="{{name}}"
                ng-hide="true"
                ng-required="required && !hasValue()"
                ng-model="selectedValues"
                multiple
                ng-options="option as getObjValue(option, labelAttr) for option in selectedValues">
            </select>
            <label class="selector-input">
                <ul class="selector-values">
                    <li ng-repeat="(index, option) in selectedValues track by index">
                        <div ng-include="viewItemTemplate"></div>
                        <div ng-if="multiple" class="selector-helper" ng-click="!disabled && unset(index)">
                            <span class="selector-icon"></span>
                        </div>
                    </li>
                </ul>
                <input 
                    ng-model="search" 
                    on-selector-ng-model-changed='onNgModelChanged'
                    placeholder="{{!hasValue() ? placeholder : ''}}" 
                    ng-model-options="{debounce: debounce}"
                    ng-disabled="disabled" 
                    ng-readonly="disableSearch" 
                    ng-required="required && !hasValue()" 
                    autocomplete="off">
                <div ng-if="!multiple || loading" 
                    class="selector-helper selector-global-helper" 
                    ng-click="!disabled && removeButton && unset()">
                    <span class="selector-icon"></span>
                </div>
            </label>
            <ul class="selector-dropdown"
                ng-show="filteredOptions.length > 0 || (create && search)">
                <li class="selector-option create"
                    ng-class="{active: highlighted == -1}"
                    ng-if="create && search"
                    ng-include="dropdownCreateTemplate"
                    ng-mouseover="highlight(-1)"
                    ng-click="createOption(search)"></li>
                <li ng-repeat-start="(index, option) in filteredOptions track by index"
                    class="selector-optgroup"
                    ng-include="dropdownGroupTemplate"
                    ng-show="groupAttr && (getObjValue(option, groupAttr) && index == 0 || getObjValue(filteredOptions[index - 1], groupAttr) != getObjValue(option, groupAttr))"></li>
                <li ng-repeat-end
                    ng-class="{active: highlighted == index, grouped: groupAttr && getObjValue(option, groupAttr)}"
                    class="selector-option"
                    ng-include="dropdownItemTemplate"
                    ng-mouseover="highlight(index)"
                    ng-click="set()">
                </li>
            </ul>
        </div>`,
        ITEM_CREATE: `Add <i ng-bind="search"></i>`,
        ITEM_DEFAULT: `<span ng-bind="getObjValue(option, labelAttr) || option"></span>`,
        GROUP_DEFAULT: `<span ng-bind="getObjValue(option, groupAttr)"></span>`
    }
}