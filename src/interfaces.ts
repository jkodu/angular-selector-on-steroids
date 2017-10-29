import { Subject } from 'rxjs/Subject';

export namespace ISelector {

    export namespace BaseComponent {
        export interface Scope extends angular.IScope {
            name,
            value,
            disabled,
            disableSearch,
            required,
            multiple,
            placeholder,
            valueAttr,
            labelAttr,
            groupAttr,
            options,
            debounce,
            create,
            limit,
            rtl,
            api, // to type this
            change,
            remote,
            remoteParam,
            remoteValidation,
            remoteValidationParam,
            removeButton,
            softDelete,
            closeAfterSelection,
            viewItemTemplate,
            dropdownItemTemplate,
            dropdownCreateTemplate,
            dropdownGroupTemplate,

            // CUSTOM MEMBERS ADDED to scope by old code, USED IN BINDINGS.
            getObjValue;
            hasValue;
            loading;
            search;
            highlight;
            highlighted;
            isOpen;

            filteredOptions: Array<any>;
            filteredOptionsInput$: Subject<ISelector.DropdownItemsComponent.Input$>;

            createOption;

            selectedValues: Array<any>;
            selectedValuesInput$: Subject<Array<any>>;
            selectedValuesOutput$: Subject<Array<any>>;


            set(option?: any): void;
            unset(index?: number): void;

            // Alternative to watchers - change listeners
            onNgModelChanged(propertyName: string, oldValue: any, newValue: any): void;

            // optional rendering of rows in angular
            angularCompileItems: boolean;
        }
    }

    export namespace DropdownItemsComponent {

        export interface Input$ {
            groupAttr: any;
            getObjValue: Function;
            set: Function;
            filteredOptions: any[];
            highlighted: number;
            highlight: Function;
        }

        export interface Scope extends angular.IScope {
            input: Subject<Input$>;
        }
    }

}
