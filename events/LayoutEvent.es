/*
 * Copyright © 2017 EaseScript All rights reserved.
 * Released under the MIT license
 * https://github.com/51breeze/EaseScript
 * @author Jun Ye <664371281@qq.com>
 */
package es.events
{
    public class LayoutEvent extends Event
    {
        static public const CHANGE ='layoutChange';
        public function LayoutEvent(type, bubbles=true, cancelable=true)
        {
            super(type, bubbles, cancelable);
        };
    }
}

