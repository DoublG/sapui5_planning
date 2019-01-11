handy research links:
* [manifest.json for component usages](https://help.sap.com/doc/468a97775123488ab3345a0c48cadd8f/7.52.0/en-US/be0cf40f61184b358b5faedaec98b2da.html)


Rendering logic
===============
1. Core.addInvalidatedUIArea (Core-dbg.js:2595) => bubbles up to trigger the rerendering
3. U.rerender (UIArea-dbg.js:628) => delta handling or complete rendering
4. R.render (RenderManager-dbg.js:693) => get rendering manager via core
5. R.renderControl (RenderManager-dbg.js:444) => calls the rendering on the control

c.placeAt (Control-dbg.js:567) => creates the UIArea

Event bubbling
==============
1. b.fireEvent (Element-dbg.js:531)
2. b.fireEvent (EventProvider-dbg.js:228)

uitzoeken hoe eventing met controls werkt.

Core.addInvalidatedUIArea (Core-dbg.js:2595)
U.addInvalidatedControl (UIArea-dbg.js:519)
U.invalidate (UIArea-dbg.js:498)
j.setParent (ManagedObject-dbg.js:2578)
j.addAggregation (ManagedObject-dbg.js:2120)
U.addContent (UIArea-dbg.js:359)
