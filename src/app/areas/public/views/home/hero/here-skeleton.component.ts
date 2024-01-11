import { Component } from '@angular/core';

@Component({
   selector: 'here-skeleton',
   standalone: true,
   imports: [],
   template: `
  <div class="animate-pulse">
   <div class=" isolate px-6 pt-14 lg:px-8">
      <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
         aria-hidden="true">
         <div
            class="left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)">
         </div>
      </div>
      <div class="mx-auto max-w-2xl sm:py-24">
          <div class="h-6 bg-gray-200 rounded-full  w-full max-w-[300px]  mx-auto mb-6">
          </div>
         <div class="text-center">
            <div class="h-7 bg-gray-200 rounded-full  w-full max-w-[450px]  mx-auto mb-3"></div>
            <div class="h-7 bg-gray-200 rounded-full  w-full max-w-[430px]  mx-auto mb-6"></div>
               <div class="mt-6">
                   <div class="h-4 bg-gray-200 rounded-full  w-full max-w-[610px]  mx-auto mb-4"></div>
                   <div class="h-4 bg-gray-200 rounded-full  w-full max-w-[600px]  mx-auto mb-6"></div>
               </div>
            <div class="mt-10 flex items-center justify-center gap-x-6">
               <div class="rounded-md bg-gray-200  text-sm font-semibold  shadow-sm h-10 w-24"></div>
                <div class="rounded-md bg-gray-200  text-sm font-semibold  shadow-sm h-5 w-32"></div>
            </div>
         </div>
      </div>
      <div
         class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
         aria-hidden="true">
         <div
            class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)">
         </div>
      </div>
   </div>
</div>

  `
})
export class HereSkeletonComponent {

}
