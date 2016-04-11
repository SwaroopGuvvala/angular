'use strict';var async_1 = require('angular2/src/facade/async');
exports.EventEmitter = async_1.EventEmitter;
exports.Observable = async_1.Observable;
/**
 * Message Bus is a low level API used to communicate between the UI and the background.
 * Communication is based on a channel abstraction. Messages published in a
 * given channel to one MessageBusSink are received on the same channel
 * by the corresponding MessageBusSource.
 */
var MessageBus = (function () {
    function MessageBus() {
    }
    return MessageBus;
})();
exports.MessageBus = MessageBus;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZV9idXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaWZmaW5nX3BsdWdpbl93cmFwcGVyLW91dHB1dF9wYXRoLWYxdVByeWpzLnRtcC9hbmd1bGFyMi9zcmMvd2ViX3dvcmtlcnMvc2hhcmVkL21lc3NhZ2VfYnVzLnRzIl0sIm5hbWVzIjpbIk1lc3NhZ2VCdXMiLCJNZXNzYWdlQnVzLmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiQUFFQSxzQkFBdUMsMkJBQTJCLENBQUM7QUFBM0QsNENBQVk7QUFBRSx3Q0FBNkM7QUFFbkU7Ozs7O0dBS0c7QUFDSDtJQUFBQTtJQThCQUMsQ0FBQ0E7SUFBREQsaUJBQUNBO0FBQURBLENBQUNBLEFBOUJELElBOEJDO0FBOUJxQixrQkFBVSxhQThCL0IsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RXZlbnRFbWl0dGVyfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2FzeW5jJztcbmltcG9ydCB7Tmdab25lfSBmcm9tICdhbmd1bGFyMi9zcmMvY29yZS96b25lL25nX3pvbmUnO1xuZXhwb3J0IHtFdmVudEVtaXR0ZXIsIE9ic2VydmFibGV9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvYXN5bmMnO1xuXG4vKipcbiAqIE1lc3NhZ2UgQnVzIGlzIGEgbG93IGxldmVsIEFQSSB1c2VkIHRvIGNvbW11bmljYXRlIGJldHdlZW4gdGhlIFVJIGFuZCB0aGUgYmFja2dyb3VuZC5cbiAqIENvbW11bmljYXRpb24gaXMgYmFzZWQgb24gYSBjaGFubmVsIGFic3RyYWN0aW9uLiBNZXNzYWdlcyBwdWJsaXNoZWQgaW4gYVxuICogZ2l2ZW4gY2hhbm5lbCB0byBvbmUgTWVzc2FnZUJ1c1NpbmsgYXJlIHJlY2VpdmVkIG9uIHRoZSBzYW1lIGNoYW5uZWxcbiAqIGJ5IHRoZSBjb3JyZXNwb25kaW5nIE1lc3NhZ2VCdXNTb3VyY2UuXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBNZXNzYWdlQnVzIGltcGxlbWVudHMgTWVzc2FnZUJ1c1NvdXJjZSwgTWVzc2FnZUJ1c1Npbmsge1xuICAvKipcbiAgICogU2V0cyB1cCBhIG5ldyBjaGFubmVsIG9uIHRoZSBNZXNzYWdlQnVzLlxuICAgKiBNVVNUIGJlIGNhbGxlZCBiZWZvcmUgY2FsbGluZyBmcm9tIG9yIHRvIG9uIHRoZSBjaGFubmVsLlxuICAgKiBJZiBydW5JblpvbmUgaXMgdHJ1ZSB0aGVuIHRoZSBzb3VyY2Ugd2lsbCBlbWl0IGV2ZW50cyBpbnNpZGUgdGhlIGFuZ3VsYXIgem9uZVxuICAgKiBhbmQgdGhlIHNpbmsgd2lsbCBidWZmZXIgbWVzc2FnZXMgYW5kIHNlbmQgb25seSBvbmNlIHRoZSB6b25lIGV4aXRzLlxuICAgKiBpZiBydW5JblpvbmUgaXMgZmFsc2UgdGhlbiB0aGUgc291cmNlIHdpbGwgZW1pdCBldmVudHMgaW5zaWRlIHRoZSBnbG9iYWwgem9uZVxuICAgKiBhbmQgdGhlIHNpbmsgd2lsbCBzZW5kIG1lc3NhZ2VzIGltbWVkaWF0ZWx5LlxuICAgKi9cbiAgYWJzdHJhY3QgaW5pdENoYW5uZWwoY2hhbm5lbDogc3RyaW5nLCBydW5JblpvbmU/OiBib29sZWFuKTogdm9pZDtcblxuICAvKipcbiAgICogQXNzaWducyB0aGlzIGJ1cyB0byB0aGUgZ2l2ZW4gem9uZS5cbiAgICogQW55IGNhbGxiYWNrcyBhdHRhY2hlZCB0byBjaGFubmVscyB3aGVyZSBydW5JblpvbmUgd2FzIHNldCB0byB0cnVlIG9uIGluaXRpYWxpemF0aW9uXG4gICAqIHdpbGwgYmUgZXhlY3V0ZWQgaW4gdGhlIGdpdmVuIHpvbmUuXG4gICAqL1xuICBhYnN0cmFjdCBhdHRhY2hUb1pvbmUoem9uZTogTmdab25lKTogdm9pZDtcblxuICAvKipcbiAgICogUmV0dXJucyBhbiB7QGxpbmsgRXZlbnRFbWl0dGVyfSB0aGF0IGVtaXRzIGV2ZXJ5IHRpbWUgYSBtZXNzYWdlXG4gICAqIGlzIHJlY2VpdmVkIG9uIHRoZSBnaXZlbiBjaGFubmVsLlxuICAgKi9cbiAgYWJzdHJhY3QgZnJvbShjaGFubmVsOiBzdHJpbmcpOiBFdmVudEVtaXR0ZXI8YW55PjtcblxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIHtAbGluayBFdmVudEVtaXR0ZXJ9IGZvciB0aGUgZ2l2ZW4gY2hhbm5lbFxuICAgKiBUbyBwdWJsaXNoIG1ldGhvZHMgdG8gdGhhdCBjaGFubmVsIGp1c3QgY2FsbCBuZXh0IChvciBhZGQgaW4gZGFydCkgb24gdGhlIHJldHVybmVkIGVtaXR0ZXJcbiAgICovXG4gIGFic3RyYWN0IHRvKGNoYW5uZWw6IHN0cmluZyk6IEV2ZW50RW1pdHRlcjxhbnk+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1lc3NhZ2VCdXNTb3VyY2Uge1xuICAvKipcbiAgICogU2V0cyB1cCBhIG5ldyBjaGFubmVsIG9uIHRoZSBNZXNzYWdlQnVzU291cmNlLlxuICAgKiBNVVNUIGJlIGNhbGxlZCBiZWZvcmUgY2FsbGluZyBmcm9tIG9uIHRoZSBjaGFubmVsLlxuICAgKiBJZiBydW5JblpvbmUgaXMgdHJ1ZSB0aGVuIHRoZSBzb3VyY2Ugd2lsbCBlbWl0IGV2ZW50cyBpbnNpZGUgdGhlIGFuZ3VsYXIgem9uZS5cbiAgICogaWYgcnVuSW5ab25lIGlzIGZhbHNlIHRoZW4gdGhlIHNvdXJjZSB3aWxsIGVtaXQgZXZlbnRzIGluc2lkZSB0aGUgZ2xvYmFsIHpvbmUuXG4gICAqL1xuICBpbml0Q2hhbm5lbChjaGFubmVsOiBzdHJpbmcsIHJ1bkluWm9uZTogYm9vbGVhbik6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIEFzc2lnbnMgdGhpcyBzb3VyY2UgdG8gdGhlIGdpdmVuIHpvbmUuXG4gICAqIEFueSBjaGFubmVscyB3aGljaCBhcmUgaW5pdGlhbGl6ZWQgd2l0aCBydW5JblpvbmUgc2V0IHRvIHRydWUgd2lsbCBlbWl0IGV2ZW50cyB0aGF0IHdpbGwgYmVcbiAgICogZXhlY3V0ZWQgd2l0aGluIHRoZSBnaXZlbiB6b25lLlxuICAgKi9cbiAgYXR0YWNoVG9ab25lKHpvbmU6IE5nWm9uZSk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4ge0BsaW5rIEV2ZW50RW1pdHRlcn0gdGhhdCBlbWl0cyBldmVyeSB0aW1lIGEgbWVzc2FnZVxuICAgKiBpcyByZWNlaXZlZCBvbiB0aGUgZ2l2ZW4gY2hhbm5lbC5cbiAgICovXG4gIGZyb20oY2hhbm5lbDogc3RyaW5nKTogRXZlbnRFbWl0dGVyPGFueT47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWVzc2FnZUJ1c1Npbmsge1xuICAvKipcbiAgICogU2V0cyB1cCBhIG5ldyBjaGFubmVsIG9uIHRoZSBNZXNzYWdlQnVzU2luay5cbiAgICogTVVTVCBiZSBjYWxsZWQgYmVmb3JlIGNhbGxpbmcgdG8gb24gdGhlIGNoYW5uZWwuXG4gICAqIElmIHJ1bkluWm9uZSBpcyB0cnVlIHRoZSBzaW5rIHdpbGwgYnVmZmVyIG1lc3NhZ2VzIGFuZCBzZW5kIG9ubHkgb25jZSB0aGUgem9uZSBleGl0cy5cbiAgICogaWYgcnVuSW5ab25lIGlzIGZhbHNlIHRoZSBzaW5rIHdpbGwgc2VuZCBtZXNzYWdlcyBpbW1lZGlhdGx5LlxuICAgKi9cbiAgaW5pdENoYW5uZWwoY2hhbm5lbDogc3RyaW5nLCBydW5JblpvbmU6IGJvb2xlYW4pOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBBc3NpZ25zIHRoaXMgc2luayB0byB0aGUgZ2l2ZW4gem9uZS5cbiAgICogQW55IGNoYW5uZWxzIHdoaWNoIGFyZSBpbml0aWFsaXplZCB3aXRoIHJ1bkluWm9uZSBzZXQgdG8gdHJ1ZSB3aWxsIHdhaXQgZm9yIHRoZSBnaXZlbiB6b25lXG4gICAqIHRvIGV4aXQgYmVmb3JlIHNlbmRpbmcgbWVzc2FnZXMuXG4gICAqL1xuICBhdHRhY2hUb1pvbmUoem9uZTogTmdab25lKTogdm9pZDtcblxuICAvKipcbiAgICogUmV0dXJucyBhbiB7QGxpbmsgRXZlbnRFbWl0dGVyfSBmb3IgdGhlIGdpdmVuIGNoYW5uZWxcbiAgICogVG8gcHVibGlzaCBtZXRob2RzIHRvIHRoYXQgY2hhbm5lbCBqdXN0IGNhbGwgbmV4dCAob3IgYWRkIGluIGRhcnQpIG9uIHRoZSByZXR1cm5lZCBlbWl0dGVyXG4gICAqL1xuICB0byhjaGFubmVsOiBzdHJpbmcpOiBFdmVudEVtaXR0ZXI8YW55Pjtcbn1cbiJdfQ==