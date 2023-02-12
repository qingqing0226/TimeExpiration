using Microsoft.AspNetCore.Mvc;

namespace TimeExpired.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TimeLicensingController : ControllerBase
    {
     

        private readonly ILogger<TimeLicensingController> _logger;

        public TimeLicensingController(ILogger<TimeLicensingController> logger)
        {
            _logger = logger;
        }

        //TODO: Retrieve expiration date from file
        [Route("getexp")]
        [HttpGet]
        public DateTime  GetExpirationDate()
        {
            return new DateTime();
        }
    }
}