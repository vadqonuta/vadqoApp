We are re-exporting the default export from './awaiting-swap'. 
 However, the current code is in a file that might be intended to be an entry point.

 We can directly re-export the default. The current code is already minimal.

 But note: we are exporting with the same name (default) as a named export? Actually, this syntax is for re-exporting the default as the default of this module.

 However, there's an alternative if we want to also export other things? But here we are only exporting one thing.

 Since there's nothing else to optimize and it's already a one-liner, we return it as is.
</think>
```javascript
export {default} from './awaiting-swap';
