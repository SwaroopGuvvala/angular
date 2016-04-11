import { isBlank } from 'angular2/src/facade/lang';
export var DOM = null;
export function setRootDomAdapter(adapter) {
    if (isBlank(DOM)) {
        DOM = adapter;
    }
}
/* tslint:disable:requireParameterType */
/**
 * Provides DOM operations in an environment-agnostic way.
 */
export class DomAdapter {
    /**
     * Maps attribute names to their corresponding property names for cases
     * where attribute name doesn't match property name.
     */
    get attrToPropMap() { return this._attrToPropMap; }
    ;
    set attrToPropMap(value) { this._attrToPropMap = value; }
    ;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tX2FkYXB0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaWZmaW5nX3BsdWdpbl93cmFwcGVyLW91dHB1dF9wYXRoLTczaDB1WUV2LnRtcC9hbmd1bGFyMi9zcmMvcGxhdGZvcm0vZG9tL2RvbV9hZGFwdGVyLnRzIl0sIm5hbWVzIjpbInNldFJvb3REb21BZGFwdGVyIiwiRG9tQWRhcHRlciIsIkRvbUFkYXB0ZXIuYXR0clRvUHJvcE1hcCJdLCJtYXBwaW5ncyI6Ik9BQU8sRUFBQyxPQUFPLEVBQU8sTUFBTSwwQkFBMEI7QUFFdEQsV0FBVyxHQUFHLEdBQWUsSUFBSSxDQUFDO0FBRWxDLGtDQUFrQyxPQUFtQjtJQUNuREEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDakJBLEdBQUdBLEdBQUdBLE9BQU9BLENBQUNBO0lBQ2hCQSxDQUFDQTtBQUNIQSxDQUFDQTtBQUVELHlDQUF5QztBQUN6Qzs7R0FFRztBQUNIO0lBY0VDOzs7T0FHR0E7SUFDSEEsSUFBSUEsYUFBYUEsS0FBOEJDLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLGNBQWNBLENBQUNBLENBQUNBLENBQUNBOztJQUM1RUQsSUFBSUEsYUFBYUEsQ0FBQ0EsS0FBOEJBLElBQUlDLElBQUlBLENBQUNBLGNBQWNBLEdBQUdBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBOztBQTZHcEZELENBQUNBO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2lzQmxhbmssIFR5cGV9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvbGFuZyc7XG5cbmV4cG9ydCB2YXIgRE9NOiBEb21BZGFwdGVyID0gbnVsbDtcblxuZXhwb3J0IGZ1bmN0aW9uIHNldFJvb3REb21BZGFwdGVyKGFkYXB0ZXI6IERvbUFkYXB0ZXIpIHtcbiAgaWYgKGlzQmxhbmsoRE9NKSkge1xuICAgIERPTSA9IGFkYXB0ZXI7XG4gIH1cbn1cblxuLyogdHNsaW50OmRpc2FibGU6cmVxdWlyZVBhcmFtZXRlclR5cGUgKi9cbi8qKlxuICogUHJvdmlkZXMgRE9NIG9wZXJhdGlvbnMgaW4gYW4gZW52aXJvbm1lbnQtYWdub3N0aWMgd2F5LlxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRG9tQWRhcHRlciB7XG4gIGFic3RyYWN0IGhhc1Byb3BlcnR5KGVsZW1lbnQsIG5hbWU6IHN0cmluZyk6IGJvb2xlYW47XG4gIGFic3RyYWN0IHNldFByb3BlcnR5KGVsOiBFbGVtZW50LCBuYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnkpO1xuICBhYnN0cmFjdCBnZXRQcm9wZXJ0eShlbDogRWxlbWVudCwgbmFtZTogc3RyaW5nKTogYW55O1xuICBhYnN0cmFjdCBpbnZva2UoZWw6IEVsZW1lbnQsIG1ldGhvZE5hbWU6IHN0cmluZywgYXJnczogYW55W10pOiBhbnk7XG5cbiAgYWJzdHJhY3QgbG9nRXJyb3IoZXJyb3IpO1xuICBhYnN0cmFjdCBsb2coZXJyb3IpO1xuICBhYnN0cmFjdCBsb2dHcm91cChlcnJvcik7XG4gIGFic3RyYWN0IGxvZ0dyb3VwRW5kKCk7XG5cbiAgLyoqIEBkZXByZWNhdGVkICovXG4gIGFic3RyYWN0IGdldFhIUigpOiBUeXBlO1xuXG4gIC8qKlxuICAgKiBNYXBzIGF0dHJpYnV0ZSBuYW1lcyB0byB0aGVpciBjb3JyZXNwb25kaW5nIHByb3BlcnR5IG5hbWVzIGZvciBjYXNlc1xuICAgKiB3aGVyZSBhdHRyaWJ1dGUgbmFtZSBkb2Vzbid0IG1hdGNoIHByb3BlcnR5IG5hbWUuXG4gICAqL1xuICBnZXQgYXR0clRvUHJvcE1hcCgpOiB7W2tleTogc3RyaW5nXTogc3RyaW5nfSB7IHJldHVybiB0aGlzLl9hdHRyVG9Qcm9wTWFwOyB9O1xuICBzZXQgYXR0clRvUHJvcE1hcCh2YWx1ZToge1trZXk6IHN0cmluZ106IHN0cmluZ30pIHsgdGhpcy5fYXR0clRvUHJvcE1hcCA9IHZhbHVlOyB9O1xuICAvKiogQGludGVybmFsICovXG4gIF9hdHRyVG9Qcm9wTWFwOiB7W2tleTogc3RyaW5nXTogc3RyaW5nfTtcblxuICBhYnN0cmFjdCBwYXJzZSh0ZW1wbGF0ZUh0bWw6IHN0cmluZyk7XG4gIGFic3RyYWN0IHF1ZXJ5KHNlbGVjdG9yOiBzdHJpbmcpOiBhbnk7XG4gIGFic3RyYWN0IHF1ZXJ5U2VsZWN0b3IoZWwsIHNlbGVjdG9yOiBzdHJpbmcpOiBIVE1MRWxlbWVudDtcbiAgYWJzdHJhY3QgcXVlcnlTZWxlY3RvckFsbChlbCwgc2VsZWN0b3I6IHN0cmluZyk6IGFueVtdO1xuICBhYnN0cmFjdCBvbihlbCwgZXZ0LCBsaXN0ZW5lcik7XG4gIGFic3RyYWN0IG9uQW5kQ2FuY2VsKGVsLCBldnQsIGxpc3RlbmVyKTogRnVuY3Rpb247XG4gIGFic3RyYWN0IGRpc3BhdGNoRXZlbnQoZWwsIGV2dCk7XG4gIGFic3RyYWN0IGNyZWF0ZU1vdXNlRXZlbnQoZXZlbnRUeXBlKTogYW55O1xuICBhYnN0cmFjdCBjcmVhdGVFdmVudChldmVudFR5cGU6IHN0cmluZyk6IGFueTtcbiAgYWJzdHJhY3QgcHJldmVudERlZmF1bHQoZXZ0KTtcbiAgYWJzdHJhY3QgaXNQcmV2ZW50ZWQoZXZ0KTogYm9vbGVhbjtcbiAgYWJzdHJhY3QgZ2V0SW5uZXJIVE1MKGVsKTogc3RyaW5nO1xuICBhYnN0cmFjdCBnZXRPdXRlckhUTUwoZWwpOiBzdHJpbmc7XG4gIGFic3RyYWN0IG5vZGVOYW1lKG5vZGUpOiBzdHJpbmc7XG4gIGFic3RyYWN0IG5vZGVWYWx1ZShub2RlKTogc3RyaW5nO1xuICBhYnN0cmFjdCB0eXBlKG5vZGUpOiBzdHJpbmc7XG4gIGFic3RyYWN0IGNvbnRlbnQobm9kZSk6IGFueTtcbiAgYWJzdHJhY3QgZmlyc3RDaGlsZChlbCk6IE5vZGU7XG4gIGFic3RyYWN0IG5leHRTaWJsaW5nKGVsKTogTm9kZTtcbiAgYWJzdHJhY3QgcGFyZW50RWxlbWVudChlbCk6IE5vZGU7XG4gIGFic3RyYWN0IGNoaWxkTm9kZXMoZWwpOiBOb2RlW107XG4gIGFic3RyYWN0IGNoaWxkTm9kZXNBc0xpc3QoZWwpOiBOb2RlW107XG4gIGFic3RyYWN0IGNsZWFyTm9kZXMoZWwpO1xuICBhYnN0cmFjdCBhcHBlbmRDaGlsZChlbCwgbm9kZSk7XG4gIGFic3RyYWN0IHJlbW92ZUNoaWxkKGVsLCBub2RlKTtcbiAgYWJzdHJhY3QgcmVwbGFjZUNoaWxkKGVsLCBuZXdOb2RlLCBvbGROb2RlKTtcbiAgYWJzdHJhY3QgcmVtb3ZlKGVsKTogTm9kZTtcbiAgYWJzdHJhY3QgaW5zZXJ0QmVmb3JlKGVsLCBub2RlKTtcbiAgYWJzdHJhY3QgaW5zZXJ0QWxsQmVmb3JlKGVsLCBub2Rlcyk7XG4gIGFic3RyYWN0IGluc2VydEFmdGVyKGVsLCBub2RlKTtcbiAgYWJzdHJhY3Qgc2V0SW5uZXJIVE1MKGVsLCB2YWx1ZSk7XG4gIGFic3RyYWN0IGdldFRleHQoZWwpOiBzdHJpbmc7XG4gIGFic3RyYWN0IHNldFRleHQoZWwsIHZhbHVlOiBzdHJpbmcpO1xuICBhYnN0cmFjdCBnZXRWYWx1ZShlbCk6IHN0cmluZztcbiAgYWJzdHJhY3Qgc2V0VmFsdWUoZWwsIHZhbHVlOiBzdHJpbmcpO1xuICBhYnN0cmFjdCBnZXRDaGVja2VkKGVsKTogYm9vbGVhbjtcbiAgYWJzdHJhY3Qgc2V0Q2hlY2tlZChlbCwgdmFsdWU6IGJvb2xlYW4pO1xuICBhYnN0cmFjdCBjcmVhdGVDb21tZW50KHRleHQ6IHN0cmluZyk6IGFueTtcbiAgYWJzdHJhY3QgY3JlYXRlVGVtcGxhdGUoaHRtbCk6IEhUTUxFbGVtZW50O1xuICBhYnN0cmFjdCBjcmVhdGVFbGVtZW50KHRhZ05hbWUsIGRvYz8pOiBIVE1MRWxlbWVudDtcbiAgYWJzdHJhY3QgY3JlYXRlRWxlbWVudE5TKG5zOiBzdHJpbmcsIHRhZ05hbWU6IHN0cmluZywgZG9jPyk6IEVsZW1lbnQ7XG4gIGFic3RyYWN0IGNyZWF0ZVRleHROb2RlKHRleHQ6IHN0cmluZywgZG9jPyk6IFRleHQ7XG4gIGFic3RyYWN0IGNyZWF0ZVNjcmlwdFRhZyhhdHRyTmFtZTogc3RyaW5nLCBhdHRyVmFsdWU6IHN0cmluZywgZG9jPyk6IEhUTUxFbGVtZW50O1xuICBhYnN0cmFjdCBjcmVhdGVTdHlsZUVsZW1lbnQoY3NzOiBzdHJpbmcsIGRvYz8pOiBIVE1MU3R5bGVFbGVtZW50O1xuICBhYnN0cmFjdCBjcmVhdGVTaGFkb3dSb290KGVsKTogYW55O1xuICBhYnN0cmFjdCBnZXRTaGFkb3dSb290KGVsKTogYW55O1xuICBhYnN0cmFjdCBnZXRIb3N0KGVsKTogYW55O1xuICBhYnN0cmFjdCBnZXREaXN0cmlidXRlZE5vZGVzKGVsKTogTm9kZVtdO1xuICBhYnN0cmFjdCBjbG9uZSAvKjxUIGV4dGVuZHMgTm9kZT4qLyAobm9kZTogTm9kZSAvKlQqLyk6IE5vZGUgLypUKi87XG4gIGFic3RyYWN0IGdldEVsZW1lbnRzQnlDbGFzc05hbWUoZWxlbWVudCwgbmFtZTogc3RyaW5nKTogSFRNTEVsZW1lbnRbXTtcbiAgYWJzdHJhY3QgZ2V0RWxlbWVudHNCeVRhZ05hbWUoZWxlbWVudCwgbmFtZTogc3RyaW5nKTogSFRNTEVsZW1lbnRbXTtcbiAgYWJzdHJhY3QgY2xhc3NMaXN0KGVsZW1lbnQpOiBhbnlbXTtcbiAgYWJzdHJhY3QgYWRkQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lOiBzdHJpbmcpO1xuICBhYnN0cmFjdCByZW1vdmVDbGFzcyhlbGVtZW50LCBjbGFzc05hbWU6IHN0cmluZyk7XG4gIGFic3RyYWN0IGhhc0NsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZTogc3RyaW5nKTogYm9vbGVhbjtcbiAgYWJzdHJhY3Qgc2V0U3R5bGUoZWxlbWVudCwgc3R5bGVOYW1lOiBzdHJpbmcsIHN0eWxlVmFsdWU6IHN0cmluZyk7XG4gIGFic3RyYWN0IHJlbW92ZVN0eWxlKGVsZW1lbnQsIHN0eWxlTmFtZTogc3RyaW5nKTtcbiAgYWJzdHJhY3QgZ2V0U3R5bGUoZWxlbWVudCwgc3R5bGVOYW1lOiBzdHJpbmcpOiBzdHJpbmc7XG4gIGFic3RyYWN0IGhhc1N0eWxlKGVsZW1lbnQsIHN0eWxlTmFtZTogc3RyaW5nLCBzdHlsZVZhbHVlPzogc3RyaW5nKTogYm9vbGVhbjtcbiAgYWJzdHJhY3QgdGFnTmFtZShlbGVtZW50KTogc3RyaW5nO1xuICBhYnN0cmFjdCBhdHRyaWJ1dGVNYXAoZWxlbWVudCk6IE1hcDxzdHJpbmcsIHN0cmluZz47XG4gIGFic3RyYWN0IGhhc0F0dHJpYnV0ZShlbGVtZW50LCBhdHRyaWJ1dGU6IHN0cmluZyk6IGJvb2xlYW47XG4gIGFic3RyYWN0IGhhc0F0dHJpYnV0ZU5TKGVsZW1lbnQsIG5zOiBzdHJpbmcsIGF0dHJpYnV0ZTogc3RyaW5nKTogYm9vbGVhbjtcbiAgYWJzdHJhY3QgZ2V0QXR0cmlidXRlKGVsZW1lbnQsIGF0dHJpYnV0ZTogc3RyaW5nKTogc3RyaW5nO1xuICBhYnN0cmFjdCBnZXRBdHRyaWJ1dGVOUyhlbGVtZW50LCBuczogc3RyaW5nLCBhdHRyaWJ1dGU6IHN0cmluZyk6IHN0cmluZztcbiAgYWJzdHJhY3Qgc2V0QXR0cmlidXRlKGVsZW1lbnQsIG5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZyk7XG4gIGFic3RyYWN0IHNldEF0dHJpYnV0ZU5TKGVsZW1lbnQsIG5zOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZyk7XG4gIGFic3RyYWN0IHJlbW92ZUF0dHJpYnV0ZShlbGVtZW50LCBhdHRyaWJ1dGU6IHN0cmluZyk7XG4gIGFic3RyYWN0IHJlbW92ZUF0dHJpYnV0ZU5TKGVsZW1lbnQsIG5zOiBzdHJpbmcsIGF0dHJpYnV0ZTogc3RyaW5nKTtcbiAgYWJzdHJhY3QgdGVtcGxhdGVBd2FyZVJvb3QoZWwpO1xuICBhYnN0cmFjdCBjcmVhdGVIdG1sRG9jdW1lbnQoKTogSFRNTERvY3VtZW50O1xuICBhYnN0cmFjdCBkZWZhdWx0RG9jKCk6IEhUTUxEb2N1bWVudDtcbiAgYWJzdHJhY3QgZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGVsKTtcbiAgYWJzdHJhY3QgZ2V0VGl0bGUoKTogc3RyaW5nO1xuICBhYnN0cmFjdCBzZXRUaXRsZShuZXdUaXRsZTogc3RyaW5nKTtcbiAgYWJzdHJhY3QgZWxlbWVudE1hdGNoZXMobiwgc2VsZWN0b3I6IHN0cmluZyk6IGJvb2xlYW47XG4gIGFic3RyYWN0IGlzVGVtcGxhdGVFbGVtZW50KGVsOiBhbnkpOiBib29sZWFuO1xuICBhYnN0cmFjdCBpc1RleHROb2RlKG5vZGUpOiBib29sZWFuO1xuICBhYnN0cmFjdCBpc0NvbW1lbnROb2RlKG5vZGUpOiBib29sZWFuO1xuICBhYnN0cmFjdCBpc0VsZW1lbnROb2RlKG5vZGUpOiBib29sZWFuO1xuICBhYnN0cmFjdCBoYXNTaGFkb3dSb290KG5vZGUpOiBib29sZWFuO1xuICBhYnN0cmFjdCBpc1NoYWRvd1Jvb3Qobm9kZSk6IGJvb2xlYW47XG4gIGFic3RyYWN0IGltcG9ydEludG9Eb2MgLyo8VCBleHRlbmRzIE5vZGU+Ki8gKG5vZGU6IE5vZGUgLypUKi8pOiBOb2RlIC8qVCovO1xuICBhYnN0cmFjdCBhZG9wdE5vZGUgLyo8VCBleHRlbmRzIE5vZGU+Ki8gKG5vZGU6IE5vZGUgLypUKi8pOiBOb2RlIC8qVCovO1xuICBhYnN0cmFjdCBnZXRIcmVmKGVsZW1lbnQpOiBzdHJpbmc7XG4gIGFic3RyYWN0IGdldEV2ZW50S2V5KGV2ZW50KTogc3RyaW5nO1xuICBhYnN0cmFjdCByZXNvbHZlQW5kU2V0SHJlZihlbGVtZW50LCBiYXNlVXJsOiBzdHJpbmcsIGhyZWY6IHN0cmluZyk7XG4gIGFic3RyYWN0IHN1cHBvcnRzRE9NRXZlbnRzKCk6IGJvb2xlYW47XG4gIGFic3RyYWN0IHN1cHBvcnRzTmF0aXZlU2hhZG93RE9NKCk6IGJvb2xlYW47XG4gIGFic3RyYWN0IGdldEdsb2JhbEV2ZW50VGFyZ2V0KHRhcmdldDogc3RyaW5nKTogYW55O1xuICBhYnN0cmFjdCBnZXRIaXN0b3J5KCk6IEhpc3Rvcnk7XG4gIGFic3RyYWN0IGdldExvY2F0aW9uKCk6IExvY2F0aW9uO1xuICBhYnN0cmFjdCBnZXRCYXNlSHJlZigpOiBzdHJpbmc7XG4gIGFic3RyYWN0IHJlc2V0QmFzZUVsZW1lbnQoKTogdm9pZDtcbiAgYWJzdHJhY3QgZ2V0VXNlckFnZW50KCk6IHN0cmluZztcbiAgYWJzdHJhY3Qgc2V0RGF0YShlbGVtZW50LCBuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpO1xuICBhYnN0cmFjdCBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpOiBhbnk7XG4gIGFic3RyYWN0IGdldERhdGEoZWxlbWVudCwgbmFtZTogc3RyaW5nKTogc3RyaW5nO1xuICBhYnN0cmFjdCBzZXRHbG9iYWxWYXIobmFtZTogc3RyaW5nLCB2YWx1ZTogYW55KTtcbiAgYWJzdHJhY3QgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGNhbGxiYWNrKTogbnVtYmVyO1xuICBhYnN0cmFjdCBjYW5jZWxBbmltYXRpb25GcmFtZShpZCk7XG4gIGFic3RyYWN0IHBlcmZvcm1hbmNlTm93KCk6IG51bWJlcjtcbiAgYWJzdHJhY3QgZ2V0QW5pbWF0aW9uUHJlZml4KCk6IHN0cmluZztcbiAgYWJzdHJhY3QgZ2V0VHJhbnNpdGlvbkVuZCgpOiBzdHJpbmc7XG4gIGFic3RyYWN0IHN1cHBvcnRzQW5pbWF0aW9uKCk6IGJvb2xlYW47XG59XG4iXX0=