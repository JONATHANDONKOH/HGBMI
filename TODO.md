# Fellowship Cards Fix TODO - ✅ COMPLETE

## Steps Completed:
- ✅ Step 1: Created TODO.md
- ✅ Step 2: Edited components/Ministry.tsx 
  - Container: Added `flex-nowrap snap-x snap-mandatory scrollbar-hide pb-6 scroll-smooth px-2 sm:px-4`
  - Cards: Added `shrink-0 snap-center mx-1 sm:mx-2`, `w-[85vw] sm:w-[280px]... min-h-[380px]`
- ✅ Step 3: Verified changes via diffs (mobile: 1 card @ 85vw with perfect snap)
- ✅ Step 4: Updated this TODO.md
- ✅ Step 5: Task complete

**Result:** Small devices now show **exactly 1 fellowship card at a time** with smooth snapping scroll. No more double cards or poor UX.

**Test:** Refresh homepage or `npm run dev` → mobile devtools → perfect single-card horizontal scroll.


