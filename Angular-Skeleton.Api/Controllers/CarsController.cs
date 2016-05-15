using Angular_Skeleton.Api.Hubs;
using Angular_Skeleton.Api.Models;
using Microsoft.AspNet.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Runtime.Caching;
namespace Angular_Skeleton.Api.Controllers
{
   // [System.Web.Http.Authorize]
    [RoutePrefix("api/Cars")]
    public class CarsController : ApiController
    {
        private readonly IHubContext _carsHub;

        private readonly string cacheKey = "cars"; 
            private List<CarViewModel> getCarListCache(CarViewModel carViewModel)
            {
                var carViewModels = new List<CarViewModel>();
                carViewModels.Add(new CarViewModel { CarType = "Toyota", Owner = "Heemi", PlateNo = "WRX 3783" });
                carViewModels.Add(new CarViewModel { CarType = "Proton", Owner = "Neelofa", PlateNo = "WRX 3788" });
                carViewModels.Add(new CarViewModel { CarType = "Subaru", Owner = "Miral", PlateNo = "WRX 3789" });
            carViewModels.Add(carViewModel);

                return carViewModels;
            }

        private List<CarViewModel> getCarList
        {
            get{ return (List<CarViewModel>)MemoryCache.Default.Get(cacheKey); }
            set { MemoryCache.Default.Set(cacheKey, value, ObjectCache.InfiniteAbsoluteExpiration); }
        }

        public CarsController()
        {
            _carsHub = GlobalHost.ConnectionManager.GetHubContext<CarHub>();
            //_artistHub = GlobalHost.ConnectionManager.GetHubContext<ArtistHub>();
            if (getCarList == null)
            {
                getCarList = new List<CarViewModel>();
            }
        }


        //[System.Web.Http.Authorize]
        [Route("")]
        public IHttpActionResult Get()
            {
                return Ok(getCarList);
            }

            // GET: api/Cars/5
            public IHttpActionResult Get(string plateNo)
            {
                return Ok(getCarList.Where(x => x.PlateNo == plateNo.Trim()));
            }

        // POST: api/Cars
        [Route("")]
        public IHttpActionResult Post(CarViewModel carViewModel)
            {

            getCarList.Add(carViewModel);

            _carsHub.Clients.All.getCars();
                return Ok(carViewModel);
            }

            // PUT: api/Cars/5
            public IHttpActionResult Put(CarViewModel carViewModel)
            {
                return Ok(carViewModel);
            }

            // DELETE: api/Cars/5
            public void Delete(int id)
            {
            }
        }
    
}
