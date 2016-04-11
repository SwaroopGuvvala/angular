'use strict';var collection_1 = require('angular2/src/facade/collection');
var lang_1 = require('angular2/src/facade/lang');
var exceptions_1 = require('angular2/src/facade/exceptions');
var validators_1 = require('../validators');
var default_value_accessor_1 = require('./default_value_accessor');
var number_value_accessor_1 = require('./number_value_accessor');
var checkbox_value_accessor_1 = require('./checkbox_value_accessor');
var select_control_value_accessor_1 = require('./select_control_value_accessor');
var radio_control_value_accessor_1 = require('./radio_control_value_accessor');
var normalize_validator_1 = require('./normalize_validator');
function controlPath(name, parent) {
    var p = collection_1.ListWrapper.clone(parent.path);
    p.push(name);
    return p;
}
exports.controlPath = controlPath;
function setUpControl(control, dir) {
    if (lang_1.isBlank(control))
        _throwError(dir, "Cannot find control");
    if (lang_1.isBlank(dir.valueAccessor))
        _throwError(dir, "No value accessor for");
    control.validator = validators_1.Validators.compose([control.validator, dir.validator]);
    control.asyncValidator = validators_1.Validators.composeAsync([control.asyncValidator, dir.asyncValidator]);
    dir.valueAccessor.writeValue(control.value);
    // view -> model
    dir.valueAccessor.registerOnChange(function (newValue) {
        dir.viewToModelUpdate(newValue);
        control.updateValue(newValue, { emitModelToViewChange: false });
        control.markAsDirty();
    });
    // model -> view
    control.registerOnChange(function (newValue) { return dir.valueAccessor.writeValue(newValue); });
    // touched
    dir.valueAccessor.registerOnTouched(function () { return control.markAsTouched(); });
}
exports.setUpControl = setUpControl;
function setUpControlGroup(control, dir) {
    if (lang_1.isBlank(control))
        _throwError(dir, "Cannot find control");
    control.validator = validators_1.Validators.compose([control.validator, dir.validator]);
    control.asyncValidator = validators_1.Validators.composeAsync([control.asyncValidator, dir.asyncValidator]);
}
exports.setUpControlGroup = setUpControlGroup;
function _throwError(dir, message) {
    var path = dir.path.join(" -> ");
    throw new exceptions_1.BaseException(message + " '" + path + "'");
}
function composeValidators(validators) {
    return lang_1.isPresent(validators) ? validators_1.Validators.compose(validators.map(normalize_validator_1.normalizeValidator)) : null;
}
exports.composeValidators = composeValidators;
function composeAsyncValidators(validators) {
    return lang_1.isPresent(validators) ? validators_1.Validators.composeAsync(validators.map(normalize_validator_1.normalizeAsyncValidator)) :
        null;
}
exports.composeAsyncValidators = composeAsyncValidators;
function isPropertyUpdated(changes, viewModel) {
    if (!collection_1.StringMapWrapper.contains(changes, "model"))
        return false;
    var change = changes["model"];
    if (change.isFirstChange())
        return true;
    return !lang_1.looseIdentical(viewModel, change.currentValue);
}
exports.isPropertyUpdated = isPropertyUpdated;
// TODO: vsavkin remove it once https://github.com/angular/angular/issues/3011 is implemented
function selectValueAccessor(dir, valueAccessors) {
    if (lang_1.isBlank(valueAccessors))
        return null;
    var defaultAccessor;
    var builtinAccessor;
    var customAccessor;
    valueAccessors.forEach(function (v) {
        if (lang_1.hasConstructor(v, default_value_accessor_1.DefaultValueAccessor)) {
            defaultAccessor = v;
        }
        else if (lang_1.hasConstructor(v, checkbox_value_accessor_1.CheckboxControlValueAccessor) ||
            lang_1.hasConstructor(v, number_value_accessor_1.NumberValueAccessor) ||
            lang_1.hasConstructor(v, select_control_value_accessor_1.SelectControlValueAccessor) ||
            lang_1.hasConstructor(v, radio_control_value_accessor_1.RadioControlValueAccessor)) {
            if (lang_1.isPresent(builtinAccessor))
                _throwError(dir, "More than one built-in value accessor matches");
            builtinAccessor = v;
        }
        else {
            if (lang_1.isPresent(customAccessor))
                _throwError(dir, "More than one custom value accessor matches");
            customAccessor = v;
        }
    });
    if (lang_1.isPresent(customAccessor))
        return customAccessor;
    if (lang_1.isPresent(builtinAccessor))
        return builtinAccessor;
    if (lang_1.isPresent(defaultAccessor))
        return defaultAccessor;
    _throwError(dir, "No valid value accessor for");
    return null;
}
exports.selectValueAccessor = selectValueAccessor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGlmZmluZ19wbHVnaW5fd3JhcHBlci1vdXRwdXRfcGF0aC1mMXVQcnlqcy50bXAvYW5ndWxhcjIvc3JjL2NvbW1vbi9mb3Jtcy9kaXJlY3RpdmVzL3NoYXJlZC50cyJdLCJuYW1lcyI6WyJjb250cm9sUGF0aCIsInNldFVwQ29udHJvbCIsInNldFVwQ29udHJvbEdyb3VwIiwiX3Rocm93RXJyb3IiLCJjb21wb3NlVmFsaWRhdG9ycyIsImNvbXBvc2VBc3luY1ZhbGlkYXRvcnMiLCJpc1Byb3BlcnR5VXBkYXRlZCIsInNlbGVjdFZhbHVlQWNjZXNzb3IiXSwibWFwcGluZ3MiOiJBQUFBLDJCQUE0QyxnQ0FBZ0MsQ0FBQyxDQUFBO0FBQzdFLHFCQUFpRSwwQkFBMEIsQ0FBQyxDQUFBO0FBQzVGLDJCQUE4QyxnQ0FBZ0MsQ0FBQyxDQUFBO0FBTy9FLDJCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUV6Qyx1Q0FBbUMsMEJBQTBCLENBQUMsQ0FBQTtBQUM5RCxzQ0FBa0MseUJBQXlCLENBQUMsQ0FBQTtBQUM1RCx3Q0FBMkMsMkJBQTJCLENBQUMsQ0FBQTtBQUN2RSw4Q0FBeUMsaUNBQWlDLENBQUMsQ0FBQTtBQUMzRSw2Q0FBd0MsZ0NBQWdDLENBQUMsQ0FBQTtBQUN6RSxvQ0FBMEQsdUJBQXVCLENBQUMsQ0FBQTtBQUlsRixxQkFBNEIsSUFBWSxFQUFFLE1BQXdCO0lBQ2hFQSxJQUFJQSxDQUFDQSxHQUFHQSx3QkFBV0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7SUFDdkNBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO0lBQ2JBLE1BQU1BLENBQUNBLENBQUNBLENBQUNBO0FBQ1hBLENBQUNBO0FBSmUsbUJBQVcsY0FJMUIsQ0FBQTtBQUVELHNCQUE2QixPQUFnQixFQUFFLEdBQWM7SUFDM0RDLEVBQUVBLENBQUNBLENBQUNB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QUNBO0lBQ3ZEQSxFQUFFQSxDQUFDQSxDQUFDQSxnQkFBU0EsQ0FBQ0EsZUFBZUEsQ0FBQ0EsQ0FBQ0E7UUFBQ0EsTUFBTUEsQ0FBQ0EsZUFBZUEsQ0FBQ0E7SUFFdkRBLFdBQVdBLENBQUNBLEdBQUdBLEVBQUVBLDZCQUE2QkEsQ0FBQ0EsQ0FBQ0E7SUFDaERBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBO0FBQ2RBLENBQUNBO0FBaENlLDJCQUFtQixzQkFnQ2xDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0xpc3RXcmFwcGVyLCBTdHJpbmdNYXBXcmFwcGVyfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2NvbGxlY3Rpb24nO1xuaW1wb3J0IHtpc0JsYW5rLCBpc1ByZXNlbnQsIGxvb3NlSWRlbnRpY2FsLCBoYXNDb25zdHJ1Y3Rvcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9sYW5nJztcbmltcG9ydCB7QmFzZUV4Y2VwdGlvbiwgV3JhcHBlZEV4Y2VwdGlvbn0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9leGNlcHRpb25zJztcblxuaW1wb3J0IHtDb250cm9sQ29udGFpbmVyfSBmcm9tICcuL2NvbnRyb2xfY29udGFpbmVyJztcbmltcG9ydCB7TmdDb250cm9sfSBmcm9tICcuL25nX2NvbnRyb2wnO1xuaW1wb3J0IHtBYnN0cmFjdENvbnRyb2xEaXJlY3RpdmV9IGZyb20gJy4vYWJzdHJhY3RfY29udHJvbF9kaXJlY3RpdmUnO1xuaW1wb3J0IHtOZ0NvbnRyb2xHcm91cH0gZnJvbSAnLi9uZ19jb250cm9sX2dyb3VwJztcbmltcG9ydCB7Q29udHJvbCwgQ29udHJvbEdyb3VwfSBmcm9tICcuLi9tb2RlbCc7XG5pbXBvcnQge1ZhbGlkYXRvcnN9IGZyb20gJy4uL3ZhbGlkYXRvcnMnO1xuaW1wb3J0IHtDb250cm9sVmFsdWVBY2Nlc3Nvcn0gZnJvbSAnLi9jb250cm9sX3ZhbHVlX2FjY2Vzc29yJztcbmltcG9ydCB7RGVmYXVsdFZhbHVlQWNjZXNzb3J9IGZyb20gJy4vZGVmYXVsdF92YWx1ZV9hY2Nlc3Nvcic7XG5pbXBvcnQge051bWJlclZhbHVlQWNjZXNzb3J9IGZyb20gJy4vbnVtYmVyX3ZhbHVlX2FjY2Vzc29yJztcbmltcG9ydCB7Q2hlY2tib3hDb250cm9sVmFsdWVBY2Nlc3Nvcn0gZnJvbSAnLi9jaGVja2JveF92YWx1ZV9hY2Nlc3Nvcic7XG5pbXBvcnQge1NlbGVjdENvbnRyb2xWYWx1ZUFjY2Vzc29yfSBmcm9tICcuL3NlbGVjdF9jb250cm9sX3ZhbHVlX2FjY2Vzc29yJztcbmltcG9ydCB7UmFkaW9Db250cm9sVmFsdWVBY2Nlc3Nvcn0gZnJvbSAnLi9yYWRpb19jb250cm9sX3ZhbHVlX2FjY2Vzc29yJztcbmltcG9ydCB7bm9ybWFsaXplVmFsaWRhdG9yLCBub3JtYWxpemVBc3luY1ZhbGlkYXRvcn0gZnJvbSAnLi9ub3JtYWxpemVfdmFsaWRhdG9yJztcbmltcG9ydCB7VmFsaWRhdG9yRm4sIEFzeW5jVmFsaWRhdG9yRm59IGZyb20gJy4vdmFsaWRhdG9ycyc7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnRyb2xQYXRoKG5hbWU6IHN0cmluZywgcGFyZW50OiBDb250cm9sQ29udGFpbmVyKTogc3RyaW5nW10ge1xuICB2YXIgcCA9IExpc3RXcmFwcGVyLmNsb25lKHBhcmVudC5wYXRoKTtcbiAgcC5wdXNoKG5hbWUpO1xuICByZXR1cm4gcDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFVwQ29udHJvbChjb250cm9sOiBDb250cm9sLCBkaXI6IE5nQ29udHJvbCk6IHZvaWQge1xuICBpZiAoaXNCbGFuayhjb250cm9sKSkgX3Rocm93RXJyb3IoZGlyLCBcIkNhbm5vdCBmaW5kIGNvbnRyb2xcIik7XG4gIGlmIChpc0JsYW5rKGRpci52YWx1ZUFjY2Vzc29yKSkgX3Rocm93RXJyb3IoZGlyLCBcIk5vIHZhbHVlIGFjY2Vzc29yIGZvclwiKTtcblxuICBjb250cm9sLnZhbGlkYXRvciA9IFZhbGlkYXRvcnMuY29tcG9zZShbY29udHJvbC52YWxpZGF0b3IsIGRpci52YWxpZGF0b3JdKTtcbiAgY29udHJvbC5hc3luY1ZhbGlkYXRvciA9IFZhbGlkYXRvcnMuY29tcG9zZUFzeW5jKFtjb250cm9sLmFzeW5jVmFsaWRhdG9yLCBkaXIuYXN5bmNWYWxpZGF0b3JdKTtcbiAgZGlyLnZhbHVlQWNjZXNzb3Iud3JpdGVWYWx1ZShjb250cm9sLnZhbHVlKTtcblxuICAvLyB2aWV3IC0+IG1vZGVsXG4gIGRpci52YWx1ZUFjY2Vzc29yLnJlZ2lzdGVyT25DaGFuZ2UoKG5ld1ZhbHVlOiBhbnkpID0+IHtcbiAgICBkaXIudmlld1RvTW9kZWxVcGRhdGUobmV3VmFsdWUpO1xuICAgIGNvbnRyb2wudXBkYXRlVmFsdWUobmV3VmFsdWUsIHtlbWl0TW9kZWxUb1ZpZXdDaGFuZ2U6IGZhbHNlfSk7XG4gICAgY29udHJvbC5tYXJrQXNEaXJ0eSgpO1xuICB9KTtcblxuICAvLyBtb2RlbCAtPiB2aWV3XG4gIGNvbnRyb2wucmVnaXN0ZXJPbkNoYW5nZSgobmV3VmFsdWU6IGFueSkgPT4gZGlyLnZhbHVlQWNjZXNzb3Iud3JpdGVWYWx1ZShuZXdWYWx1ZSkpO1xuXG4gIC8vIHRvdWNoZWRcbiAgZGlyLnZhbHVlQWNjZXNzb3IucmVnaXN0ZXJPblRvdWNoZWQoKCkgPT4gY29udHJvbC5tYXJrQXNUb3VjaGVkKCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0VXBDb250cm9sR3JvdXAoY29udHJvbDogQ29udHJvbEdyb3VwLCBkaXI6IE5nQ29udHJvbEdyb3VwKSB7XG4gIGlmIChpc0JsYW5rKGNvbnRyb2wpKSBfdGhyb3dFcnJvcihkaXIsIFwiQ2Fubm90IGZpbmQgY29udHJvbFwiKTtcbiAgY29udHJvbC52YWxpZGF0b3IgPSBWYWxpZGF0b3JzLmNvbXBvc2UoW2NvbnRyb2wudmFsaWRhdG9yLCBkaXIudmFsaWRhdG9yXSk7XG4gIGNvbnRyb2wuYXN5bmNWYWxpZGF0b3IgPSBWYWxpZGF0b3JzLmNvbXBvc2VBc3luYyhbY29udHJvbC5hc3luY1ZhbGlkYXRvciwgZGlyLmFzeW5jVmFsaWRhdG9yXSk7XG59XG5cbmZ1bmN0aW9uIF90aHJvd0Vycm9yKGRpcjogQWJzdHJhY3RDb250cm9sRGlyZWN0aXZlLCBtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcbiAgdmFyIHBhdGggPSBkaXIucGF0aC5qb2luKFwiIC0+IFwiKTtcbiAgdGhyb3cgbmV3IEJhc2VFeGNlcHRpb24oYCR7bWVzc2FnZX0gJyR7cGF0aH0nYCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wb3NlVmFsaWRhdG9ycyh2YWxpZGF0b3JzOiAvKiBBcnJheTxWYWxpZGF0b3J8RnVuY3Rpb24+ICovIGFueVtdKTogVmFsaWRhdG9yRm4ge1xuICByZXR1cm4gaXNQcmVzZW50KHZhbGlkYXRvcnMpID8gVmFsaWRhdG9ycy5jb21wb3NlKHZhbGlkYXRvcnMubWFwKG5vcm1hbGl6ZVZhbGlkYXRvcikpIDogbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBvc2VBc3luY1ZhbGlkYXRvcnMoXG4gICAgdmFsaWRhdG9yczogLyogQXJyYXk8VmFsaWRhdG9yfEZ1bmN0aW9uPiAqLyBhbnlbXSk6IEFzeW5jVmFsaWRhdG9yRm4ge1xuICByZXR1cm4gaXNQcmVzZW50KHZhbGlkYXRvcnMpID8gVmFsaWRhdG9ycy5jb21wb3NlQXN5bmModmFsaWRhdG9ycy5tYXAobm9ybWFsaXplQXN5bmNWYWxpZGF0b3IpKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNQcm9wZXJ0eVVwZGF0ZWQoY2hhbmdlczoge1trZXk6IHN0cmluZ106IGFueX0sIHZpZXdNb2RlbDogYW55KTogYm9vbGVhbiB7XG4gIGlmICghU3RyaW5nTWFwV3JhcHBlci5jb250YWlucyhjaGFuZ2VzLCBcIm1vZGVsXCIpKSByZXR1cm4gZmFsc2U7XG4gIHZhciBjaGFuZ2UgPSBjaGFuZ2VzW1wibW9kZWxcIl07XG5cbiAgaWYgKGNoYW5nZS5pc0ZpcnN0Q2hhbmdlKCkpIHJldHVybiB0cnVlO1xuICByZXR1cm4gIWxvb3NlSWRlbnRpY2FsKHZpZXdNb2RlbCwgY2hhbmdlLmN1cnJlbnRWYWx1ZSk7XG59XG5cbi8vIFRPRE86IHZzYXZraW4gcmVtb3ZlIGl0IG9uY2UgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMzAxMSBpcyBpbXBsZW1lbnRlZFxuZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdFZhbHVlQWNjZXNzb3IoZGlyOiBOZ0NvbnRyb2wsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZUFjY2Vzc29yczogQ29udHJvbFZhbHVlQWNjZXNzb3JbXSk6IENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgaWYgKGlzQmxhbmsodmFsdWVBY2Nlc3NvcnMpKSByZXR1cm4gbnVsbDtcblxuICB2YXIgZGVmYXVsdEFjY2Vzc29yOiBDb250cm9sVmFsdWVBY2Nlc3NvcjtcbiAgdmFyIGJ1aWx0aW5BY2Nlc3NvcjogQ29udHJvbFZhbHVlQWNjZXNzb3I7XG4gIHZhciBjdXN0b21BY2Nlc3NvcjogQ29udHJvbFZhbHVlQWNjZXNzb3I7XG4gIHZhbHVlQWNjZXNzb3JzLmZvckVhY2goKHY6IENvbnRyb2xWYWx1ZUFjY2Vzc29yKSA9PiB7XG4gICAgaWYgKGhhc0NvbnN0cnVjdG9yKHYsIERlZmF1bHRWYWx1ZUFjY2Vzc29yKSkge1xuICAgICAgZGVmYXVsdEFjY2Vzc29yID0gdjtcblxuICAgIH0gZWxzZSBpZiAoaGFzQ29uc3RydWN0b3IodiwgQ2hlY2tib3hDb250cm9sVmFsdWVBY2Nlc3NvcikgfHxcbiAgICAgICAgICAgICAgIGhhc0NvbnN0cnVjdG9yKHYsIE51bWJlclZhbHVlQWNjZXNzb3IpIHx8XG4gICAgICAgICAgICAgICBoYXNDb25zdHJ1Y3Rvcih2LCBTZWxlY3RDb250cm9sVmFsdWVBY2Nlc3NvcikgfHxcbiAgICAgICAgICAgICAgIGhhc0NvbnN0cnVjdG9yKHYsIFJhZGlvQ29udHJvbFZhbHVlQWNjZXNzb3IpKSB7XG4gICAgICBpZiAoaXNQcmVzZW50KGJ1aWx0aW5BY2Nlc3NvcikpXG4gICAgICAgIF90aHJvd0Vycm9yKGRpciwgXCJNb3JlIHRoYW4gb25lIGJ1aWx0LWluIHZhbHVlIGFjY2Vzc29yIG1hdGNoZXNcIik7XG4gICAgICBidWlsdGluQWNjZXNzb3IgPSB2O1xuXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChpc1ByZXNlbnQoY3VzdG9tQWNjZXNzb3IpKVxuICAgICAgICBfdGhyb3dFcnJvcihkaXIsIFwiTW9yZSB0aGFuIG9uZSBjdXN0b20gdmFsdWUgYWNjZXNzb3IgbWF0Y2hlc1wiKTtcbiAgICAgIGN1c3RvbUFjY2Vzc29yID0gdjtcbiAgICB9XG4gIH0pO1xuXG4gIGlmIChpc1ByZXNlbnQoY3VzdG9tQWNjZXNzb3IpKSByZXR1cm4gY3VzdG9tQWNjZXNzb3I7XG4gIGlmIChpc1ByZXNlbnQoYnVpbHRpbkFjY2Vzc29yKSkgcmV0dXJuIGJ1aWx0aW5BY2Nlc3NvcjtcbiAgaWYgKGlzUHJlc2VudChkZWZhdWx0QWNjZXNzb3IpKSByZXR1cm4gZGVmYXVsdEFjY2Vzc29yO1xuXG4gIF90aHJvd0Vycm9yKGRpciwgXCJObyB2YWxpZCB2YWx1ZSBhY2Nlc3NvciBmb3JcIik7XG4gIHJldHVybiBudWxsO1xufVxuIl19